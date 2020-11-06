// %Imports
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
// %Styling
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { formStyle, bodyStyle } from '../../../themes/Styles';
// %Components
import FormInputs from './FormInputs';
import {
	createProfile,
	getCurrentProfile,
} from '../../../../redux/actions/profile';
import DynamicAlert from '../../../Layout/Modals/Alert';

const EditForm = ({
	profile: { profile, loading },
	auth: { user },
	createProfile,
	getCurrentProfile,
	history,
}) => {
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

	useEffect(() => {
		getCurrentProfile();

		// If data currently exists in the users profile
		// then return that Data
		setFormData({
			company: loading || !profile.company ? '' : profile.company,
			website: loading || !profile.website ? '' : profile.website,
			location: loading || !profile.location ? '' : profile.location,
			status: loading || !profile.status ? '' : profile.status,
			skills: loading || !profile.skills ? '' : profile.skills.join(','),
			githubusername:
				loading || !profile.githubusername ? '' : profile.githubusername,
			bio: loading || !profile.bio ? '' : profile.bio,
			twitter: loading || !profile.twitter ? '' : profile.twitter,
			facebook: loading || !profile.facebook ? '' : profile.facebook,
			linkedin: loading || !profile.linkedin ? '' : profile.linkedin,
			youtube: loading || !profile.youtube ? '' : profile.youtube,
			instagram: loading || !profile.instagram ? '' : profile.instagram,
		});
		// eslint-disable-next-line
	}, [loading]);

	const onChange = (e) =>
		setFormData({ ...formData, [e.target.name]: e.target.value });

	const onSubmit = (e) => {
		e.preventDefault();
		createProfile(formData, history, true);
	};
	return (
		<Grid
			container
			direction="column"
			justify="center"
			alignItems="center"
			className={formStyle().formFieldBodyEdit}
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

EditForm.propTypes = {
	auth: PropTypes.object.isRequired,
	createProfile: PropTypes.func.isRequired,
	profile: PropTypes.object.isRequired,
	getCurrentProfile: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
	auth: state.auth,
	profile: state.profile,
});

export default connect(mapStateToProps, { createProfile, getCurrentProfile })(
	withRouter(EditForm)
);
