// %Imports
import React from 'react';

// %Styling
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { ThemeProvider } from '@material-ui/core/styles';
// %Components
import { mainTheme } from '../themes/Themes';
import { bodyStyle } from '../themes/Styles';

const Landing = () => {
	return (
		<ThemeProvider theme={mainTheme}>
			<Grid container direction="column" justify="center" alignItems="center">
				<h1 className={bodyStyle().header_Primary}>
					Learn and Share Knowledge with the World!
				</h1>
				<p className={bodyStyle().paragraph_Primary}>
					Learn at <b>your</b> level, at <b>your own</b> pace!
				</p>
				<div className={bodyStyle().div_Main}>
					<Button className={bodyStyle().button_Primary}>Register</Button>
					<Button className={bodyStyle().button_Primary}>Login</Button>
				</div>
			</Grid>
		</ThemeProvider>
	);
};

export default Landing;
