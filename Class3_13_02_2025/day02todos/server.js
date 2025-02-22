// using Express
const express = require("express");

// using CORS for Express middleware
//const cors = require("cors");

// create express app
const app = express();

// logger npmlog for writing to log file
const logger = require("npmlog");

// origin
//var corsOptions = {
//  origin: "http://localhost:8181"
//};

// removed temporarily to avoid CORS conflict 
//app.use(cors(corsOptions));

// parsing requests of content/type application/json
app.use(express.json());

// parsing requests of content/type application/x-www-form-urlencoded
app.use(express.urlencoded({
    extended: true
}));

// route for GET method
app.get('/api/test', (req, res) => {
    logger.warn('From Npmlog', 'Npmlog is simple too %j', {
        'message': 'test'
    });

    res.json({
        'message': 'Hello Npmlog!'
    });
});  // <-- Closing brace for /api/test route

// simple route
app.get("/", (req, res) => {
    res.json({
        message: "Welcome to Todos application!"
    });
});  // <-- Closing brace for "/" route

// set port and listen for request
const PORT = process.env.PORT || 8181;

require("./app/routes/todos.routes.js")(app);

// adding a client
app.use(express.static('client')); 

app.listen(PORT, () => {
    // making it reusable with any port
    console.log(`Server is running on ${PORT}.`)
});

