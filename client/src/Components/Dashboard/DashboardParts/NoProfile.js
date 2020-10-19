// %Imports
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
// %Styling
import Button from '@material-ui/core/Button';
import { formStyle, navStyle } from '../../themes/Styles';
// %Components

const NoProfile = () => {
	return (
		<>
			<p className={navStyle().title}>
				You do not have a Profile, let's create one.
			</p>
			<Button
				edge="start"
				color="inherit"
				aria-label="home"
				className={formStyle().button}
				component={RouterLink}
				to="/Profile/Create"
			>
				Create Profile
			</Button>
		</>
	);
};

export default NoProfile;
