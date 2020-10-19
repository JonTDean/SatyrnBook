// %Imports
import React from 'react';
// %Styling
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Link as RouterLink } from 'react-router-dom';
import { formStyle } from '../../themes/Styles';

const DashboardActions = () => {
	return (
		<>
				<Button
					edge="start"
					color="inherit"
					aria-label="home"
					component={RouterLink}
					className={formStyle().button}
					to="/Profile/Edit"
				>
					Edit Profile
				</Button>

				<Button
					edge="start"
					color="inherit"
					aria-label="home"
					component={RouterLink}
					className={formStyle().button}
					to="/Profile/Experience"
				>
					Add Experience
				</Button>

				<Button
					edge="start"
					color="inherit"
					aria-label="home"
					component={RouterLink}
					className={formStyle().button}
					to="/Profile/Education"
				>
					Add Education
				</Button>
		</>
	);
};

export default DashboardActions;
