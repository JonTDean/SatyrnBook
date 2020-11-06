// %Imports
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile } from '../../redux/actions/profile';
// %Styling
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { formStyle, navStyle } from '../themes/Styles';
// %Components
import DashboardActions from './DashboardParts/DashboardActions';
import NoProfile from './DashboardParts/NoProfile';
import Experience from './Experience';
// import Education from './Education';
import DynamicAlert from '../Layout/Modals/Alert';
import Education from './Education';

const Dashboard = ({
	getCurrentProfile,
	auth: { user },
	profile: { profile },
}) => {
	useEffect(() => {
		getCurrentProfile();
	}, [getCurrentProfile]);

	return (
		<Grid
			container
			direction="column"
			justify="center"
			alignItems="center"
			// style={{ height: '90vh' }}
			className={formStyle().formFieldBodyDashboard}
		>
			<Paper
				className={formStyle().formContainer}
				elevation={12}
				className={formStyle().formContainerAlt}
			>
				<h1 style={{ fontFamily: 'Montserrat' }}>Dashboard</h1>
				<p style={{ fontFamily: 'Montserrat' }}>Welcome, {user && user.name}</p>
				{profile && profile !== null ? (
					<>
						<DashboardActions />
						<Experience experience={profile.experience} />
						<div style={{ marginTop: '4em', marginBottom: '4em' }} />
						<Education education={profile.education} />
						<div style={{ marginTop: '4em' }} />
					</>
				) : (
					<>
						<NoProfile />
					</>
				)}
			</Paper>
			<DynamicAlert />
		</Grid>
	);
};

Dashboard.propTypes = {
	getCurrentProfile: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
	profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	auth: state.auth,
	profile: state.profile,
});

export default connect(mapStateToProps, { getCurrentProfile })(Dashboard);
