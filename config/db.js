// Global Variables
const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const connectDB = async () => {
	try {
		// Connect to DB
		mongoose.connect(db);
		console.log('MongoDB Connected');
	} catch (err) {
		console.error(err.message);
		process.exit(1); // Exit process with failure
	}
};