// %Imports
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// %Styling
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Box from '@material-ui/core/Box';
import DonutSmallTwoToneIcon from '@material-ui/icons/DonutSmallTwoTone';
// %Components
import { navStyle } from '../../themes/Styles';
import { Logout } from '../../../redux/actions/auth';
import GuestNavBar from './NavBarTypes/GuestNavBar';
import UserNavBar from './NavBarTypes/UserNavBar';

const Navbar = ({ auth: { isAuthenticated, loading }, Logout }) => {
	return (
		<AppBar className={navStyle().navBar}>
			<Toolbar className={navStyle().navLayout}>
				<IconButton
					edge="start"
					color="inherit"
					aria-label="home"
					component={RouterLink}
					to="/"
				>
					<DonutSmallTwoToneIcon />
				</IconButton>
				{!loading && (
					<>
						{isAuthenticated ? <UserNavBar Logout={Logout} /> : <GuestNavBar />}
					</>
				)}
			</Toolbar>
		</AppBar>
	);
};

Navbar.propTypes = {
	Logout: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	auth: state.auth,
});

export default connect(mapStateToProps, { Logout })(Navbar);
