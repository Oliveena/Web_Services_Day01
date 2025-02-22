import express from "express";
import bodyParser from "body-parser";
import routes from "./routes/routes.js";

const port = 3001; // or try another port like 3002 or 3003
const app = express();

// Middleware setup
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Import routes
routes(app);

// Start the server
const server = app.listen(port, (error) => {
    if (error) return console.log(`Error: ${error}`);
    console.log(`Server is listening on port ${server.address().port}`);
});
