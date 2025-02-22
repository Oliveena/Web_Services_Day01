
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('finalapiauctions', 'finalapiauctions', 'LmS#Ftf-^nxfr>/3', {
    host: 'localhost',
    dialect: 'mysql',
});
const Auction = require('../models/auctions.models.js')(sequelize, DataTypes); 

const npmlog = require('npmlog');
const validator = require('validator'); // for email

// catching errors in auction entry (like David did in his example)

const validateAuction = (auction) => {

    const errors = [];
    const {itemCode, itemDesc, sellerEmail} = auction;

    if (!itemCode || typeof itemCode !== 'string' || itemCode.length < 5 || itemCode.length > 20 || /[^a-zA-Z0-9\s.-]/.test(itemCode)) {
        errors.push('Auction code must be 5-20 characters and contain only letters, digits, dashes, dots, or spaces.');
    }
    if (!itemDesc || typeof itemDesc !== 'string' || itemDesc.length < 1 || itemDesc.length > 200) {
        errors.push('Auction description must be 1-200 characters.');
    }
    if (!validator.isEmail(sellerEmail)) {
        errors.push('Error! Seller email is invalid.');
    }

    // returning errors to user
    if (errors.length > 0) {
        return {
            isValid: false,
            errors
        }
        // return res.status(400).json({ errors });
    }

    // if no errors
    return {isValid: true};
}

// find auction by code (GET method)
exports.findByCode = async (req, res) => {
    try {
        const auction = await Auction.findOne({ where: { itemCode: req.params.code } }); 
        if (!auction) {
            return res.status(404).send({ message: "Auction code not found." });
        }
        return res.status(200).send(auction);
    } catch (err) {
        console.error("Error retrieving auction.");
        return res.status(500).send({ message: "Error retrieving auction." });
    }
}

// get all the auctions in the DB (GET method)
// debugging
console.log(Auction);
exports.findAll = async (req, res) => {
    try {
        const auctions = await Auction.findAll(); 
        return res.status(200).send(auctions);
    } catch (err) {
        console.error("Error fetching auctions:", err);
        return res.status(500).send({ message: "Error retrieving auctions." });
    }
}

// create and save new auction (POST method)
exports.createAuction = async (req, res) => {
    const validation = validateAuction(req.body);
    if (!validation.isValid) {
        return res.status(400).send({ message: validation.errors.join(", ") });
    }

    try {
        const auction = await Auction.create({
            itemCode: req.body.itemCode, 
            itemDesc: req.body.itemDesc,
            sellerEmail: req.body.sellerEmail,
            lastBid: req.body.lastBid,
            lastBidderEmail: req.body.lastBidderEmail
        });
        return res.status(201).send({ itemCode: auction.itemCode });
    } catch (err) {
        if (err.name === "SequelizeUniqueConstraintError") {
            return res.status(400).send({ message: "An auction with the same code already exists in the database!" });
        }
        return res.status(500).send({ message: "An error occurred while creating the auction." });
    }
}

// Modify auction by itemCode, since users may not have access to ID 
exports.modifyByCode = async (req, res) => {
    try {
        // Find the auction by itemCode
        const auction = await Auction.findOne({ where: { itemCode: req.params.code } });

        if (!auction) {
            return res.status(404).send({ message: "Auction not found." });
        }

        auction.lastBid = req.body.lastBid;
        auction.lastBidderEmail = req.body.lastBidderEmail;

        await auction.save();
        return res.status(200).send({ message: "Auction updated successfully", auction });
    } catch (err) {
        return res.status(500).send({ message: "Error updating auction." });
    }
}




