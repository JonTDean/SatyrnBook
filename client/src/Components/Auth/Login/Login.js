// %Imports
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// %Styling
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { formStyle } from '../../themes/Styles';
// %Components
import LoginForm from './LoginForm';
import DynamicAlert from '../../Layout/Modals/Alert';
import { Login as loginAuth } from '../../../redux/actions/auth';

const Login = ({ loginAuth, isAuthenticated }) => {
	const [formData, setFormData] = useState({
		email: '',
		password: '',
	});

	const { email, password } = formData;

	const handleChange = (e) =>
		setFormData({ ...formData, [e.target.name]: e.target.value });

	const onLogin = async (e) => {
		e.preventDefault();

		// Sends a POST request to login USER
		loginAuth(email, password);
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
				<h1 style={{ fontFamily: 'Montserrat' }}>Login</h1>

				<LoginForm
					email={email}
					password={password}
					handleChange={handleChange}
					onLogin={onLogin}
					authorized={isAuthenticated}
				/>

				<p style={{ fontFamily: 'Montserrat' }}>
					Don't have an account? Register <Link to="/register">Here!</Link>
				</p>
				<DynamicAlert />
			</Paper>
		</Grid>
	);
};

Login.propTypes = {
	loginAuth: PropTypes.func.isRequired,
	isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
	isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { loginAuth })(Login);
