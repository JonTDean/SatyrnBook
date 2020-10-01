// Imports & Global Variables
// // Imports
const express = require('express');
// // Global Variables
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => res.send('API Running'));

app.listen(port, () => {
	console.log(`server started on ${port}`);
});
