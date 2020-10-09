// %Imports
import React, { useState } from 'react';
// %Styling
import { withStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import {
	buttonCollapserStyle,
	barCollapserStyle,
} from '../../../themes/Styles';

const ButtonCollapser = (props) => {
	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);

	return (
		<div className={buttonCollapserStyle().buttonCollapse}>
			<IconButton onClick={handleMenu(setAnchorEl)}>
				<HomeIcon />
			</IconButton>
			<Menu
				id="menu-appbar"
				anchorEl={anchorEl}
				anchorOrigin={{
					vertical: 'top',
					horizontal: 'right',
				}}
				transformOrigin={{
					vertical: 'top',
					horizontal: 'right',
				}}
				open={open}
				onClose={(e) => handleClose(setAnchorEl, e)}
			>
				{props.children}
			</Menu>
		</div>
	);
};

export const BarCollapser = (props) => {
	return (
		<div>
			<ButtonCollapser>
				<MenuItem>Login</MenuItem>
				<MenuItem>Signup</MenuItem>
			</ButtonCollapser>
			<div className={barCollapserStyle().buttonBar} id="appbar-collapse">
				<Button color="inherit">Login</Button>
				<Button color="inherit">Signup</Button>
			</div>
		</div>
	);
};

function handleMenu(setter, event) {
	setter({
		anchorEl: event.currentTarget,
	});
}

function handleClose(setter) {
	setter({
		anchorEl: null,
	});
}
