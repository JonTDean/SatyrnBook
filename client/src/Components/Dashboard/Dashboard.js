// %Imports
import React, { useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// %Styling
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
// %Components
import { getCurrentProfile } from '../../redux/actions/profile';
import UserBoard from './UserBoard';

const Dashboard = ({
	getCurrentProfile,
	auth: { user },
	profile: { profile, loading },
}) => {
	useEffect(() => {
		getCurrentProfile();
	}, [getCurrentProfile]);

	return loading && profile == null ? (
		<Grid
			container
			direction="column"
			justify="center"
			alignItems="center"
			style={{ height: '110vh' }}
		>
			<CircularProgress />
		</Grid>
	) : (
		<UserBoard name={user && user.name} profile={profile} />
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
