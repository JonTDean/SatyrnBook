// %Imports
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
// %Styles
import { navStyle } from '../../../themes/Styles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

const GuestNavBar = () => {
	return (
		<Box>
			<Button
				className={navStyle().title}
				color="inherit"
				component={RouterLink}
				to="/"
			>
				Learners
			</Button>
			<Button
				className={navStyle().title}
				color="inherit"
				component={RouterLink}
				to="/Register"
			>
				Register
			</Button>
			<Button
				className={navStyle().title}
				color="inherit"
				component={RouterLink}
				to="/Login"
			>
				Login
			</Button>
		</Box>
	);
};

export default GuestNavBar;
