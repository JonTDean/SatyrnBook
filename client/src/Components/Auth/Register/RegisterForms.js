// %Imports
import React from 'react';
import { Redirect } from 'react-router-dom';
// %Styling
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { formStyle, formInput } from '../../themes/Styles';

export const RegisterForm = ({
	name,
	email,
	password,
	passwordConfirm,
	onRegister,
	handleChange,
	authorized,
}) => {
	// Redirect if logged in
	if (authorized) return <Redirect to="/Profile/Dashboard" />;

	return (
		<form
			noValidate
			autoComplete="off"
			onSubmit={onRegister}
			className={formStyle().form}
		>
			{/* Email Input Field*/}
			<TextField
				InputProps={formInput}
				InputLabelProps={formInput}
				id="email"
				name="email"
				label="Email"
				color="primary"
				helperText={
					!email.match(/^\S+@\S+\.\S+/g)
						? 'Please Enter a Correct E-Mail'
						: 'Nice E-Mail!'
				}
				value={email}
				onChange={handleChange}
				error={!email.match(/^\S+@\S+\.\S+/g)}
				required
			/>
			{/* Name Input Field */}
			<TextField
				InputProps={formInput}
				InputLabelProps={formInput}
				id="name"
				name="name"
				label="Name"
				color="primary"
				helperText={
					name.length < 3 ? 'Please Enter your Full Name' : 'Great Name!'
				}
				value={name}
				onChange={handleChange}
				error={name.length < 3}
				required
			/>
			{/* Password Input Field */}
			<TextField
				InputProps={formInput}
				InputLabelProps={formInput}
				id="password"
				name="password"
				type="password"
				label="Password"
				color="primary"
				helperText={
					password.length < 6
						? 'Password must be longer than 6 Characters'
						: 'Good Password!'
				}
				value={password}
				onChange={handleChange}
				error={password.length < 6}
				required
			/>
			{/* Password Confirmation Input Field */}
			<TextField
				InputProps={formInput}
				InputLabelProps={formInput}
				id="passwordConfirm"
				name="passwordConfirm"
				type="password"
				label="Confirm Password"
				color="primary"
				helperText={
					passwordConfirm !== password
						? 'Please type the correct Password.'
						: 'Password Confirmed!'
				}
				value={passwordConfirm}
				onChange={handleChange}
				error={passwordConfirm !== password || passwordConfirm.length < 1}
				required
			/>
			<Button type="submit" className={formStyle().button}>
				Register
			</Button>
		</form>
	);
};

export default RegisterForm;
