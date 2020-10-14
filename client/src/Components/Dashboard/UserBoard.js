// % Imports
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
// % Styling
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { formStyle, navStyle } from '../themes/Styles';
// % Components

const UserBoard = ({ name, profile }) => {
	console.log(profile);

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
				<p className={navStyle().title}>Welcome, {name}</p>

				
				{/* {profile ? (
					<>
						<p className={navStyle().title}>Has Profile</p>
					</>
				) : (
					<>
						<p className={navStyle().title}>No Profile, please create one: </p>
						<Button
							edge="start"
							color="inherit"
							aria-label="home"
							component={RouterLink}
							className={formStyle().button}
							to="/create-profile"
						>
							Create Profile
						</Button>
					</>
				)} */}
			</Paper>
		</Grid>
	);
};

export default UserBoard;
