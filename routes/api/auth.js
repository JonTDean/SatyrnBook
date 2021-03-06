// %Imports
const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const jwt = require('jsonwebtoken');
const config = require('config');
const bcrypt = require('bcryptjs');
const { check, validationResult } = require('express-validator');
// %Global-Variables
const User = require('../../models/User');

// @Route   GET api/auth
// @Desc    Authorize User
// @access  Public
router.get('/', auth, async (req, res) => {
	// console.log('RESPONSE: ', res);
	// console.log('REQUEST: ', req);
	// console.log('REQUESTED USER: ', req.user);

	try {
		const user = await User.findById(req.user.id).select('-password');
		res.json(user);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server Error');
	}
});

// @Route   GET api/auth
// @Desc    Authenticate User && Get Token
// @access  Public
router.post(
	'/',
	[
		// @Test	Checks for incoming Data
		check('email', 'Please include a valid E-Mail').isEmail(),
		check('password', 'Password is required!').exists(),
	],
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		// !DRY	Destructure req.body
		const { email, password } = req.body;

		// Start Registration Process
		try {
			let user = await User.findOne({ email });

			// !Check	See if there is no user
			if (!user) {
				return res
					.status(400)
					.json({ errors: [{ msg: 'Invalid Credentials' }] });
			}

			const isMatch = await bcrypt.compare(password, user.password);

			if (!isMatch) {
				return res
					.status(400)
					.json({ errors: [{ msg: 'Invalid Credentials' }] });
			}

			// !Check	Return JSONWebToken
			// I had an error going on here.
			// The payload was returning the User object as the user.id
			// What was supposed to happen was the user object gets its
			// ID set by Object user.id
			const payload = {
				user: {
					id: user.id,
				},
			};

			// Sign the user.id into an encrypted token
			jwt.sign(
				payload,
				config.get('jwtSecret'),
				{ expiresIn: 3600 },
				(err, token) => {
					if (err) throw err;
					res.json({ token });
				}
			);
		} catch (err) {
			console.error(err);
			res.status(500).send('Server error');
		}
	}
);

module.exports = router;
