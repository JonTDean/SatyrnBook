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
import Alert from '../Layout/Modals/Alert';

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
			style={{ height: '90vh' }}
		>
			<Paper className={formStyle().formContainer} elevation={5}>
				<h1 className={navStyle().title}>Dashboard</h1>
				<p className={navStyle().title}>Welcome, {user && user.name}</p>
				{profile && profile !== null ? (
					<>
						<DashboardActions />
					</>
				) : (
					<>
						<NoProfile />
					</>
				)}
			</Paper>
			<Alert />
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
