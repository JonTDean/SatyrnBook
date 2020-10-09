// %Imports
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
// %Styling
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Box from '@material-ui/core/Box';
import DonutSmallTwoToneIcon from '@material-ui/icons/DonutSmallTwoTone';
import Button from '@material-ui/core/Button';
// %Components
import { navStyle } from '../../themes/Styles';

const Navbar = () => {
	return (
		<AppBar className={navStyle().navBar}>
			<Toolbar className={navStyle().navLayout}>
				<IconButton
					edge="start"
					color="inherit"
					aria-label="menu"
					component={RouterLink}
					to="/"
				>
					<DonutSmallTwoToneIcon />
				</IconButton>
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
			</Toolbar>
		</AppBar>
	);
};

export default Navbar;
