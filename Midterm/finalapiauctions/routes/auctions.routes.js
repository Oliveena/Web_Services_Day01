// imports required for everything to work
const auctions = require("../controllers/auctions.controller");
const express = require("express");
const npmlog = require('npmlog');

// creating a router
const router = express.Router(); 

// defining necessary routes
router.post("/", auctions.createAuction);
router.get("/", auctions.findAll);
router.get("/:code", auctions.findByCode);
router.patch("/:code", auctions.modifyByCode); //only LastBid and LastBidderEmail

// exporting the routes we just created 
module.exports = router;