// const http = require("http"); // Import Node.js HTTP module
// const fs = require("fs"); // Import Node.js File System module
// const path = require("path"); // Import Node.js Path module

// const port = 3000; // Port number for the server

// // Create an HTTP server
// const server = http.createServer((req, res) => {
//   // Define the path to your HTML file
//   //   const filePath = path.join(__dirname, "index.html");

//   // Check if the file exists

//   fs.readFile("./index.html", (err, data) => {
//     if (err) {
//       res.writeHead(404, { "Content-Type": "text/plain" });
//       res.end("File not found");
//     } else {
//       res.writeHead(200, { "Content-Type": "text/html" });
//       res.end(data);
//     }
//   });
// });

// // Start the server
// server.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}`);
// });

// const http = require("http"); // Import Node.js HTTP module
// const fs = require("fs"); // Import Node.js File System module
// const path = require("path"); // Import Node.js Path module

// const port = 3000; // Port number for the server

// // Create an HTTP server
// const server = http.createServer((req, res) => {
//   let filePath = "." + req.url; // Get the requested URL and build the file path
//   if (filePath === "./") {
//     filePath = "./index.html"; // Default to index.html for root requests
//   }

//   const extname = path.extname(filePath); // Get file extension
//   let contentType = "text/html"; // Default content type

//   // Set content type based on file extension
//   switch (extname) {
//     case ".js":
//       contentType = "application/javascript";
//       break;
//     case ".css":
//       contentType = "text/css";
//       break;
//     case ".json":
//       contentType = "application/json";
//       break;
//     case ".png":
//       contentType = "image/png";
//       break;
//     case ".jpg":
//       contentType = "image/jpeg";
//       break;
//     case ".ico":
//       contentType = "image/x-icon";
//       break;
//   }

//   // Read and serve the requested file
//   fs.readFile(filePath, (err, data) => {
//     if (err) {
//       res.writeHead(404, { "Content-Type": "text/plain" });
//       res.end("File not found");
//     } else {
//       res.writeHead(200, { "Content-Type": contentType });
//       res.end(data);
//     }
//   });
// });

// // Start the server
// server.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}`);
// });

const express = require("express"); // Import Express
const path = require("path"); // Import Path module

const app = express(); // Create an Express application
const port = 3000; // Define the port

// Serve static files from the current directory
app.use(express.static(path.join(__dirname)));

// Define a route for the root URL
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
