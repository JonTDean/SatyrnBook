// %Imports
import React from 'react';
// %Styling
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import { Link as RouterLink } from 'react-router-dom';
import { formStyle } from '../../themes/Styles';

const DashboardActions = () => {
	return (
		<ButtonGroup
			className={formStyle().editForm}
		>
			<Button
				edge="start"
				color="inherit"
				aria-label="home"
				component={RouterLink}
				className={formStyle().buttonAlt}
				to="/Profile/Edit"
			>
				Edit Profile
			</Button>

			<Button
				edge="start"
				color="inherit"
				aria-label="home"
				component={RouterLink}
				className={formStyle().buttonAlt}
				to="/Profile/Experience"
			>
				Add Experience
			</Button>

			<Button
				edge="start"
				color="inherit"
				aria-label="home"
				component={RouterLink}
				className={formStyle().buttonAlt}
				to="/Profile/Education"
			>
				Add Education
			</Button>
		</ButtonGroup>
	);
};

export default DashboardActions;
