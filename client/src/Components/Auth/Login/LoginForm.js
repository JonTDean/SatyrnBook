// %Imports
import React from 'react';
import { Redirect } from 'react-router-dom';

// %Styling
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { formStyle, formInput } from '../../themes/Styles';

export const LoginForm = ({
	email,
	password,
	handleChange,
	onLogin,
	authorized,
}) => {
	// Redirect if logged in
	if (authorized) return <Redirect to="/Profile/Dashboard" />;

	return (
		<form
			noValidate
			autoComplete="off"
			onSubmit={onLogin}
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
				helperText="Please fill out your e-mail address."
				value={email}
				onChange={handleChange}
			/>
			{/* Password Input Field */}
			<TextField
				InputProps={formInput}
				InputLabelProps={formInput}
				id="password"
				name="password"
				label="Password"
				color="primary"
				helperText="Please type your password."
				value={password}
				onChange={handleChange}
			/>
			<Button type="submit" className={formStyle().button}>
				Login
			</Button>
		</form>
	);
};

export default LoginForm;
