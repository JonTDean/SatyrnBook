// %Imports
import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setAlert } from '../../../redux/actions/alert';
import { Register as registerAuth } from '../../../redux/actions/auth';
// %Styling
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { formStyle } from '../../themes/Styles';
// %Components
import DynamicAlert from '../../Layout/Modals/Alert';
import RegisterForm from './RegisterForms';

const Register = ({ setAlert, registerAuth, isAuthenticated }) => {
	const [formData, setFormData] = useState({
		email: '',
		name: '',
		password: '',
		passwordConfirm: '',
	});

	const { name, email, password, passwordConfirm } = formData;

	// Dynamic Variable Setter for onChange
	const handleChange = (e) =>
		setFormData({ ...formData, [e.target.name]: e.target.value });

	// Dynamic Variable Setter for onSubmit
	const onRegister = async (e) => {
		e.preventDefault();

		if (password !== passwordConfirm) {
			setAlert('Passwords Do Not Match!', 'error', 3000); // Throw error if the passwords do not match, frontend security/data-entry checks
		} else {
			registerAuth({ email, name, password }); // Register Acount to DB
		}
	};

	return (
		<Grid
			container
			direction="column"
			justify="center"
			alignItems="center"
			style={{ height: '100vh' }}
			className={formStyle().formFieldBody}
		>
			<Paper className={formStyle().formContainer} elevation={10}>
				{/* Header */}
				<h1 style={{ fontFamily: 'Montserrat' }}>Register</h1>

				{/* Form */}
				<RegisterForm
					email={email}
					name={name}
					password={password}
					passwordConfirm={passwordConfirm}
					handleChange={handleChange}
					onRegister={onRegister}
					authorized={isAuthenticated}
				/>

				{/* Footer */}
				<p style={{ fontFamily: 'Montserrat' }}>
					Already have an account? Login <Link to="/login">Here!</Link>
				</p>

				{/* Alerts System */}
				<DynamicAlert />
			</Paper>
		</Grid>
	);
};

Register.propTypes = {
	setAlert: PropTypes.func.isRequired,
	registerAuth: PropTypes.func.isRequired,
	isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
	isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { setAlert, registerAuth })(Register);
