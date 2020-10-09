// %Imports
import React, { useState } from 'react';
import Link from 'react-router-dom/Link';
// %Styling
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const Register = () => {
	const [formData, setFormData] = useState({
		email: '',
		password: '',
	});

	const { email, password } = formData;

	const handleChange = (e) =>
		setFormData({ ...formData, [e.target.name]: e.target.value });

	const onSubmit = async (e) => {
		e.preventDefault();
		console.log('Success!');
	};
	return (
		<Grid
			container
			direction="column"
			justify="center"
			alignItems="center"
			style={{ height: '60vh' }}
		>
			<h1>Login</h1>
			<form noValidate autoComplete="off" onSubmit={onSubmit}>
				{/* Email Input Field*/}
				<TextField
					id="email"
					name="email"
					label="Email"
					color="primary"
					helperText="Please fill out your e-mail address."
					value={email}
					onChange={handleChange}
				/>
				{/* Password Input Field */}
				<TextField
					id="password"
					name="password"
					label="Password"
					color="primary"
					helperText="Please type your password."
					value={password}
					onChange={handleChange}
				/>
				<Button type="submit">Login</Button>
			</form>

			<p>
				Don't have an account? Register <Link to="/register">Here!</Link>
			</p>
		</Grid>
	);
};

export default Register;
