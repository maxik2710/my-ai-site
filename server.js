// Import the Express library
const express = require('express');

// Import the built-in Node.js module 'path' to handle file paths
const path = require('path');

// Create an Express application instance
const app = express();

// Serve static files (HTML, CSS, JS, images) from the "public" directory
// __dirname gives the current directory (fullstack/)
app.use(express.static(path.join(__dirname, 'public')));

// Catch-all route: If no API or static file matches, send back index.html
// This is useful for Single Page Applications (SPA) like React or Vue
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Set the port for the server to listen on
// Uses the PORT from the environment or defaults to 3000 locally
const PORT = process.env.PORT || 3000;

// Start the server and log a message to the console
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
