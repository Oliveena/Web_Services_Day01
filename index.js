/*// build a server with Node's HTTP module
import { response } from "express";
import {createServer} from "http";
const port = 3001;
const server = createServer();

// server handles request, displays the URL 
// on server side, displays message on client side
server.on("request", (request, response) => {
    console.log(`URL: ${request.url}`);
        response.end("Hello, server!");
});

// informing the server which port to lsiten to and
// display error if needed

// Start the server
server.listen(port, (error) => {
    if (error) return console.log(`Error: {error}`);
        console.log(`Server is listening on port ${port}`);
}
);

*/

// Import packages and set the port 
import express from "express";
const port = 3002;
const app = express();

// instructing server the procedure in case of a GET request 
app.get("/", (request, response) => {
    console.log(`URL: ${request.url}`);
    response.send("Hello, Server!");
});

// start server on port 3002 with listen() method
const server = app.listen(port, (error) => {
    if (error) return console.log(`Error: ${error}`);
	console.log(`Server listening on port ${server.address().port}`);
});

// to be continued