// %Imports
import makeStyles from '@material-ui/core/styles/makeStyles';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { mainTheme } from './Themes';
// %Styling
import 'fontsource-montserrat/500-normal.css';
import 'fontsource-neuton/300.css';
import blue from '@material-ui/core/colors/blue';

// // Navbar
export const navStyle = makeStyles((theme) => ({
	title: {
		flexGrow: 1,
		color: mainTheme.palette.primary.contrastText,
		marginRight: theme.spacing(2),
		fontFamily: 'Montserrat',
		fontSize: 14,
	},
	// Navbar
	navLayout: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	navBar: {
		background: fade(mainTheme.palette.secondary.main, 0.5),
	},
}));

// // Body
export const bodyStyle = makeStyles((theme) => ({
	// Body Divs
	div_Main: {
		margin: 8,
		padding: 8,
	},
	// Main Color Scheme
	header_Primary: {
		color: mainTheme.palette.primary.contrastText,
		fontFamily: 'Montserrat',
		fontSize: 30,
		margin: 0,
	},
	paragraph_Primary: {
		color: mainTheme.palette.primary.contrastText,
		fontFamily: 'neuton',
		fontSize: 20,
	},
	button_Primary: {
		fontSize: 15,
		fontFamily: 'neuton',
		color: mainTheme.palette.primary.contrastText,
		background: mainTheme.palette.primary.main,
		boxRadius: 3,
		margin: 5,
		padding: 10,
		paddingLeft: 20,
		paddingRight: 20,
	},
	// Secondary Color Scheme
	header_Secondary: {
		color: mainTheme.palette.secondary.contrastText,
		backgroundColor: mainTheme.palette.secondary.light,
		fontFamily: 'Montserrat',
		fontSize: 30,
	},
	paragraph_Secondary: {
		color: mainTheme.palette.secondary.contrastText,
		backgroundColor: mainTheme.palette.secondary.light,
		fontFamily: 'neuton',
		fontSize: 20,
	},
	button_Secondary: {
		fontSize: 15,
		fontFamily: 'neuton',
		background: mainTheme.palette.secondary.main,
		boxRadius: 3,
		margin: 5,
		padding: 10,
		paddingLeft: 20,
		paddingRight: 20,
	},
}));

export const canvasStyle = makeStyles((theme) => ({
	body_Main: {
		color: blue[400],
	},
}));
