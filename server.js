// Imports & Global Variables
// // Imports
const express = require('express');
const connectDB = require('./config/db');
// // Global Variables
const app = express();
const port = process.env.PORT || 3000;

// Server Logic
connectDB();

// Route
app.get('/', (req, res) => res.send('API Running'));

// Listener
app.listen(port, () => {
	console.log(`server started on ${port}`);
});
