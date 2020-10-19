// %Imports
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
// %Styling
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { formStyle, bodyStyle } from '../../../themes/Styles';
// %Components
import FormInputs from './FormInputs';
import { createProfile } from '../../../../redux/actions/profile';
import DynamicAlert from '../../../Layout/Modals/Alert';

const CreateForm = ({ auth: { user }, createProfile, history }) => {
	// Drop down menu for Social Media.
	const [displaySocialInputs, toggleSocialInputs] = useState(false);

	// Structured formData, destructured for further use.
	const [formData, setFormData] = useState({
		company: '',
		website: '',
		location: '',
		status: '',
		skills: '',
		githubusername: '',
		bio: '',
		twitter: '',
		facebook: '',
		linkedin: '',
		youtube: '',
		instagram: '',
	});

	const onChange = (e) =>
		setFormData({ ...formData, [e.target.name]: e.target.value });

	const onSubmit = (e) => {
		e.preventDefault();
		createProfile(formData, history);
	};
	return (
		<Grid
			container
			direction="column"
			justify="center"
			alignItems="center"
		>
			<Paper className={formStyle().formContainerAlt} elevation={5}>
				<h2 className={bodyStyle().header_Primary}>
					Hey <i>{user && user.name}</i>, let's create your Profile
				</h2>
				<p>* is required</p>

				<FormInputs
					displaySocialInputs={displaySocialInputs}
					toggleSocialInputs={toggleSocialInputs}
					formData={formData}
					onChange={onChange}
					onSubmit={onSubmit}
					DynamicAlert={DynamicAlert}
				/>
			</Paper>
		</Grid>
	);
};

CreateForm.propTypes = {
	auth: PropTypes.object.isRequired,
	createProfile: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
	auth: state.auth,
});

export default connect(mapStateToProps, { createProfile })(
	withRouter(CreateForm)
);
