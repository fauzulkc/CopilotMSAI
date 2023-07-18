// Create web server
// Import the required modules
const express = require('express');

// Create an instance of the Express application
const app = express();
const port = 3000; // Set the port for the server

// Define a route handler for the root URL
app.get('/', (req, res) => {
  res.send('Hello, World!'); // Send a response back to the client
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
