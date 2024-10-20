const express = require('express'); // Import Express.js framework for handling HTTP requests
const http = require('http');       // Import the built-in Node.js HTTP module
const socketIo = require('socket.io'); // Import Socket.io for real-time, bidirectional communication

// Setup Express application
const app = express(); // Create an Express application
const server = http.createServer(app); // Create an HTTP server using the Express app
const io = socketIo(server); // Attach Socket.io to the server to handle WebSocket connections

// Serve static files from the "public" directory
app.use(express.static('public')); // This allows serving HTML, CSS, and JavaScript files located in the "public" folder

// Setup Socket.io connection handling
io.on('connection', (socket) => { // This event is triggered when a new client connects to the server
    console.log('A user connected'); // Log a message to the server console

    // Listen for "chat message" events sent by clients
    socket.on('chat message', (msg) => { // When a client sends a "chat message" event
        // Broadcast the received message to all connected clients
        io.emit('chat message', msg); // This sends the message to everyone, including the sender
    });

    // Handle the "disconnect" event when a client disconnects
    socket.on('disconnect', () => { // This event is triggered when a client disconnects from the server
        console.log('User disconnected'); // Log a message to the server console
    });
});

// Start the server on port 3000
const PORT = 3000; // Define the port number for the server
server.listen(PORT, () => { // Start the server and listen on the specified port
    console.log(`Server is running on http://localhost:${PORT}`); // Log a message indicating the server is running
});
