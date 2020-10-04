// %Imports
const bcrypt = require('bcryptjs');
const express = require('express');
const gravatar = require('gravatar');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');
// %Global-Variables
const router = express.Router();
const User = require('../../models/User'); // Model

// @Route   POST api/users
// @Desc    Register User
// @access  Public
router.post(
	'/',
	[
		// @Test	Checks for incoming Data
		check('name', 'Name is required').not().isEmpty(),
		check('email', 'Please include a valid E-Mail').isEmail(),
		check(
			'password',
			'Please enter a password with 6 or more characters'
		).isLength({ min: 6 }),
	],
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		// !DRY	Destructure req.body
		const { name, email, password } = req.body;

		// Start Registration Process
		try {
			let user = await User.findOne({ email });

			// !Check	See if user Exists
			if (user) {
				return res
					.status(400)
					.json({ errors: [{ msg: 'User already exists' }] });
			}

			// !Check	Get users gravatar
			const avatar = gravatar.url(email, {
				s: '200',
				r: 'pg',
				d: 'mm',
			});

			// !Check	Create a new User
			user = new User({
				name,
				email,
				avatar,
				password,
			});

			// !Check	Encrypt the Password
			const salt = await bcrypt.genSalt(10); // Creates a Salt for the password hash
			user.password = await bcrypt.hash(password, salt); // Encrypts the password in a Salt + Hash encryption

			await user.save();

			// !Check	Return JSONWebToken
			const payload = {
				user: {
					id: user.id,
				},
			};

			// Sign the user.id into an encrypted token
			jwt.sign(
				payload,
				config.get('jwtSecret'),
				{ expiresIn: 360000 },
				(err, token) => {
					if (err) throw err;
					res.json({ token });
				}
			);
		} catch (err) {
			console.error(err);
		}
	}
);

module.exports = router;
