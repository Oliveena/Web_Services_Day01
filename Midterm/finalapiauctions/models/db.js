const { Sequelize } = require('sequelize');
const dbConfig = require('./dbConfig'); // Assuming your dbConfig is in a separate file

// Initialize Sequelize with the database connection settings
const sequelize = new Sequelize({
  dialect: 'mysql',
  host: dbConfig.host,
  username: dbConfig.username,
  password: dbConfig.password,
  database: dbConfig.db,
});

// Authenticate connection to the database
sequelize.authenticate()
  .then(() => {
    console.log("Congratulations, you have connected to the database!");
  })
  .catch(err => {
    console.error("Oops! Unable to connect to the database:", err);
  });

// Export sequelize instance for use in other files
module.exports = sequelize;
