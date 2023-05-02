// Import the required dependencies
const express = require("express");

// Create a new instance of the express application
const app = express();

// Define a route handler for the home page
app.get("/", function(req, res) {
    res.send("Hello world");
});

// Define the port to listen on
const port = 3000;

// Start the server and listen for incoming requests
app.listen(port, function() {
    console.log(`Server is running on port ${port}`);
});
