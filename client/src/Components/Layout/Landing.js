// %Imports
import React from 'react';
import { Link as RouterLink, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// %Styling
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import { bodyStyle, landingStyle } from '../themes/Styles';
// %Components

const Landing = ({ isAuthenticated }) => {
	if (isAuthenticated) return <Redirect to="/Profile/Dashboard" />;

	return (
		<Paper className={landingStyle().paperContainer}>
			<Grid
				container
				direction="column"
				justify="center"
				alignItems="center"
				style={{ height: '110vh' }}
			>
				<h1 className={bodyStyle().header_Secondary}>
					Learn and Share Knowledge with the World!
				</h1>
				<p className={bodyStyle().paragraph_Secondary}>
					Learn at <b>your</b> level, at <b>your own</b> pace!
				</p>
				<div className={bodyStyle().div_Main}>
					<Button
						className={bodyStyle().button_Primary}
						component={RouterLink}
						to="/Register"
					>
						Register
					</Button>
					<Button
						className={bodyStyle().button_Primary}
						component={RouterLink}
						to="/Login"
					>
						Login
					</Button>
				</div>
			</Grid>
		</Paper>
	);
};

Landing.propTypes = {
	isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
	isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Landing);
