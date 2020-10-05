// %Imports
import React from 'react';

// %Styling
import { ThemeProvider } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Box from '@material-ui/core/Box';
import DonutSmallTwoToneIcon from '@material-ui/icons/DonutSmallTwoTone';
import Button from '@material-ui/core/Button';

// %Components
import { useStyles, mainTheme } from '../themes/starting_mui_theme';

const Navbar = () => {
	const classes = useStyles();

	return (
		<ThemeProvider theme={mainTheme}>
			<AppBar position="static" className={classes.navBar}>
				<Toolbar className={classes.navLayout}>
					<IconButton
						edge="start"
						className={classes.menuButton}
						color="inherit"
						aria-label="menu"
					>
						<DonutSmallTwoToneIcon />
					</IconButton>
					<Box>
						<Button className={classes.title} color="inherit">
							Developers
						</Button>
						<Button className={classes.title} color="inherit">
							Register
						</Button>
						<Button className={classes.title} color="inherit">
							Login
						</Button>
					</Box>
				</Toolbar>
			</AppBar>
		</ThemeProvider>
	);
};

export default Navbar;
