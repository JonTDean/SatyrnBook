// Imports & Global Variables
// // Imports
const express = require('express');
const connectDB = require('./config/db');
// // Global Variables
const app = express();
const port = process.env.PORT || 5000;

// Server Logic
connectDB();

// @Middleware
app.use(
	express.json({
		extended: false,
	})
);

// @Getter
app.get('/', (req, res) => res.send('API Running'));

// @Routes
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/users', require('./routes/api/users'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));

// @Listener
app.listen(port, () => {
	console.log(`server started on ${port}`);
});
