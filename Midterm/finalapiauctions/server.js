const debug = require('debug')('server');
const auctionsRoutes = require('./routes/auctions.routes');
const express = require('express');
const npmlog = require('npmlog');
const bodyParser = require('body-parser');
const { Sequelize, DataTypes } = require('sequelize');

// DB access with Sequelize
const sequelize = new Sequelize('finalapiauctions', 'finalapiauctions', 'LmS#Ftf-^nxfr>/3', {
    host: 'localhost',
    dialect: 'mysql',
  });
  
  // importing model
  const Auction = require('./models/auctions.models.js')(sequelize, DataTypes);

const app = express();

// using built-in middleware instead of body-parser
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

// setting npmlog level to debug
npmlog.level = debug;

// use auctions routes
app.use('/api/auctions', auctionsRoutes);

// using files from 'static' directory
app.use(express.static('app/static'));


// testing DB connection
sequelize
  .authenticate()
  .then(() => {
    console.log('Congratulations! YOu have connected to the database.');
  })
  .catch((err) => {
    console.error('Database connection error:', err);
  });

  // Synchronize models with the database
sequelize.sync({ force: false })
.then(() => console.log('Models have been synced.'));

// debugging middleware
app.use((req, res, next) => {
  console.log("Request Body:", req.body);
  console.log("Request received at:", new Date());
  console.log("Request Method:", req.method);
  console.log("Request Path:", req.path);
  next();
});

// testing a simple route
app.get('/', (req, res) => {
  res.json({ message: 'Hey there, user.' });
});

// starting server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});