// Global Variables
const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const connectDB = async () => {
	try {
		// Connect to DB
		await mongoose.connect(db, {
			useNewUrlParser: true, // Parses URL String
			useUnifiedTopology: true, // Server Monitor Engine
			useCreateIndex: true, // Model Index Builder
			useFindAndModify: false, // Fixes deprecation error
		});
		console.log('MongoDB Connected');
	} catch (err) {
		console.error(err.message);

		// Exit process with failure
		process.exit(1);
	}
};

module.exports = connectDB;
