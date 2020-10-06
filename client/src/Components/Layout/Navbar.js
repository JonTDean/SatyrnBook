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
import { mainTheme } from '../themes/Themes';
import { navStyle } from '../themes/Styles';

const Navbar = () => {
	return (
		<ThemeProvider theme={mainTheme}>
			<AppBar position="static" className={navStyle().navBar}>
				<Toolbar className={navStyle().navLayout}>
					<IconButton edge="start" color="inherit" aria-label="menu">
						<DonutSmallTwoToneIcon />
					</IconButton>
					<Box>
						<Button className={navStyle().title} color="inherit">
							Developers
						</Button>
						<Button className={navStyle().title} color="inherit">
							Register
						</Button>
						<Button className={navStyle().title} color="inherit">
							Login
						</Button>
					</Box>
				</Toolbar>
			</AppBar>
		</ThemeProvider>
	);
};

export default Navbar;
