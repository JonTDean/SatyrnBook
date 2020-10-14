// %Imports
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
// %Styles
import { navStyle } from '../../../themes/Styles';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import ExitToAppTwoToneIcon from '@material-ui/icons/ExitToAppTwoTone';
import AmpStoriesIcon from '@material-ui/icons/AmpStories';

const UserNavBar = ({ Logout }) => {
	return (
		<Box>
			<IconButton
				className={navStyle().title}
				aria-label="Dashboard"
				component={RouterLink}
				to="/dashboard"
			>
				<AmpStoriesIcon alt="Dashboard" />
				Dashboard
			</IconButton>
			<IconButton
				className={navStyle().title}
				aria-label="Logout"
				onClick={Logout}
				component={RouterLink}
				to="/"
			>
				<ExitToAppTwoToneIcon alt="Logout" />
				Logout
			</IconButton>
		</Box>
	);
};

export default UserNavBar;
