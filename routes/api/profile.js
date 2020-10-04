// %Imports
const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');
const request = require('request');
const config = require('config');

// %Schemas
const Profile = require('../../models/Profile');
const User = require('../../models/User');

// @Route   GET api/profile/me
// @Desc    Get Users Profile
// @access  Private
router.get('/me', auth, async (req, res) => {
	try {
		// Find a profile with the incoming User.ID
		const profile = await Profile.findOne({
			user: req.user.id,
		}).populate('user', ['name', 'avatar']);

		if (!profile) {
			return res.status(400).json({ msg: 'There is no profile for this user' });
		}

		res.json(profile);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server Error');
	}
});

// @Route   POST api/profile/
// @Desc    Create or Update a user profile
// @access  Private
router.post(
	'/',
	[
		auth,
		[
			check('status', 'Satus is Required.').not().isEmpty(),
			check('skills', 'Skills is Required.').not().isEmpty(),
		],
	],
	async (req, res) => {
		const errors = validationResult(req);

		// Check! Error Check if check fields trips false
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		const {
			company,
			website,
			location,
			bio,
			status,
			githubusername,
			skills,
			youtube,
			facebook,
			twitter,
			instagram,
			linkedin,
		} = req.body;

		// Build Profile Object
		const profileFields = {};
		profileFields.user = req.user.id;

		// Required validation Checks
		if (company) profileFields.company = company;
		if (website) profileFields.website = website;
		if (location) profileFields.location = location;
		if (bio) profileFields.bio = bio;
		if (status) profileFields.status = status;
		if (githubusername) profileFields.githubusername = githubusername;

		if (skills) {
			profileFields.skills = skills.split(',').map((skill) => skill.trim());
		}

		// Build Profile-Social Object
		profileFields.social = {};
		if (youtube) profileFields.social.youtube = youtube;
		if (facebook) profileFields.social.facebook = facebook;
		if (twitter) profileFields.social.twitter = twitter;
		if (instagram) profileFields.social.instagram = instagram;
		if (linkedin) profileFields.social.linkedin = linkedin;

		try {
			let profile = await Profile.findOne({ user: req.user.id });

			if (profile) {
				// Update
				profile = await Profile.findOneAndUpdate(
					{ user: req.user.id },
					{ $set: profileFields },
					{ new: true }
				);

				return res.json(profile);
			}
			// Create
			profile = new Profile(profileFields);

			await profile.save();
			res.json(profile);
		} catch (err) {
			console.log(err.message);
			res.status(500).send('Server Error');
		}
	}
);

// @Route   GET api/profile/
// @Desc    GET All Profiles
// @access  Public
router.get('/', async (req, res) => {
	try {
		// GET All Profile Logic
		const profiles = await Profile.find().populate('user', ['Name', 'Avatar']);
		res.json(profiles);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server Error');
	}
});

// @Route   GET api/profile/user/:user_id
// @Desc    GET Profile by user ID
// @access  Public
router.get('/user/:user_id', async (req, res) => {
	try {
		// GET Profile Logic
		const profile = await Profile.findOne({
			user: req.params.user_id,
		}).populate('user', ['Name', 'Avatar']);

		// check! No profile err check
		if (!profile) {
			return res
				.status(400)
				.json({ msg: 'There is no profile for this User.' });
		}

		res.json(profiles);
	} catch (err) {
		console.error(err.message);

		// Checks if the err is of an ObjectId
		if (err.kind == 'ObjectId') {
			return res.status(400).json({ msg: 'Profile not found.' });
		}
		res.status(500).send('Server Error');
	}
});

// @Route   DELETE api/profile/
// @Desc    Delete Profile, User, and User Posts
// @access  Public
router.delete('/', auth, async (req, res) => {
	try {
		// @todo - remove users posts

		// Remove Profile
		const profiles = await Profile.findOneAndRemove({ user: req.user.id });
		// Remove User
		const user = await User.findOneAndRemove({ _id: req.user.id });

		res.json({ msg: 'User Removed' });
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server Error');
	}
});

// @Route   PUT api/profile/experience
// @Desc    Add profile Experience
// @access  Private
router.put(
	'/experience',
	[
		auth,
		[
			check('title', 'Title is Required').not().isEmpty(),
			check('company', 'Company is Required').not().isEmpty(),
			check('from', 'From Date is Required').not().isEmpty(),
		],
	],
	async (req, res) => {
		const errors = validationResult(req);

		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		const {
			title,
			company,
			location,
			from,
			to,
			current,
			description,
		} = req.body;

		// Create Experience Object
		const newExp = {
			title,
			company,
			location,
			from,
			to,
			current,
			description,
		};

		try {
			const profile = await Profile.findOne({ user: req.user.id });

			// Add experience to beginning of array
			profile.experience.unshift(newExp);

			await profile.save();

			res.json(profile);
		} catch (err) {
			console.error(err.message);

			res.status(500).send('Server Error');
		}
	}
);

// @Route   DELETE api/profile/experience/:exp_id
// @Desc    Remove profile Experience
// @access  Private
router.delete('/experience/:exp_id', auth, async (req, res) => {
	try {
		const profile = await Profile.findOne({ user: req.user.id });

		// Get the remove index
		const removeIndex = profile.experience
			.map((item) => item.id)
			.indexOf(req.params.exp_id);

		// remove the index with splice
		profile.experience.splice(removeIndex, 1);

		await profile.save();

		res.json(profile);
	} catch (err) {
		console.error(err.message);

		res.status(500).send('Server Error');
	}
});

// @Route   PUT api/profile/education
// @Desc    Add profile education
// @access  Private
router.put(
	'/education',
	[
		auth,
		[
			check('school', 'School is Required').not().isEmpty(),
			check('degree', 'Degree is Required').not().isEmpty(),
			check('fieldofstudy', 'Field of study is Required').not().isEmpty(),
			check('from', 'From Date is Required').not().isEmpty(),
		],
	],
	async (req, res) => {
		const errors = validationResult(req);

		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		const {
			school,
			degree,
			fieldofstudy,
			from,
			to,
			current,
			description,
		} = req.body;

		// Create education Object
		const newEdu = {
			school,
			degree,
			fieldofstudy,
			from,
			to,
			current,
			description,
		};

		try {
			const profile = await Profile.findOne({ user: req.user.id });

			// Add education to beginning of array
			profile.education.unshift(newEdu);

			await profile.save();

			res.json(profile);
		} catch (err) {
			console.error(err.message);

			res.status(500).send('Server Error');
		}
	}
);

// @Route   DELETE api/profile/education/:edu_id
// @Desc    Remove profile education
// @access  Private
router.delete('/education/:edu_id', auth, async (req, res) => {
	try {
		const profile = await Profile.findOne({ user: req.user.id });

		// Get the remove index
		const removeIndex = profile.education
			.map((item) => item.id)
			.indexOf(req.params.edu_id);

		// remove the index with splice
		profile.education.splice(removeIndex, 1);

		await profile.save();

		res.json(profile);
	} catch (err) {
		console.error(err.message);

		res.status(500).send('Server Error');
	}
});

// @Route   GET api/profile/github/:username
// @Desc    Get user repos from github
// @access  Public
router.get('/github/:username', (req, res) => {
	try {
		const options = {
			uri: `https://api.github.com/users/${
				req.params.username
			}/repos?per_page=5&sort=created:asc&client_id=${config.get(
				'githubClientId'
			)}&client_secret=${config.get('githubSecret')}`,
			method: 'GET',
			headers: { 'user-agent': 'node.js' },
		};

		request(options, (error, response, body) => {
			if (error) console.error();

			if (response.statusCode !== 200) {
				return res.status(404).json({ msg: 'No Github profile found' });
			}

			res.json(JSON.parse(body));
		});
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server Error');
	}
});
module.exports = router;
