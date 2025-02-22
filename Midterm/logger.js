const log = require('npmlog');
const fs = require ('fs');
const path = require ('path');

//define the path to the error log file
const logFilePath = path.join(__dirname, "../../logs/error.log");



// Use built-in middleware instead of body-parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

