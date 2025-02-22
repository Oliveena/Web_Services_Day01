// importing MySQL and config file with user credentials
const mysql = require("mysql2");
const dbConfig = require("../config/db.config.js");

// creating a connection to the DB
const connection = mysql.createConnection({
    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB
});

// when the connection is set up
connection.connect(error => {
    if(error) throw error;
    console.log("Congratulations, you have conected to the database!");
})
; 

// making the connection accessible through export
module.exports = connection;