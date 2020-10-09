// %Imports
import makeStyles from '@material-ui/core/styles/makeStyles';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { mainTheme } from './Themes';
// %Styling
import 'fontsource-montserrat/500-normal.css';
import 'fontsource-neuton/300.css';

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
		postion: 'static',
		background: fade(mainTheme.palette.secondary.main, 0.5),
		borderRadius: 2,
		margin: 20,
		width: '98%',
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
		fontFamily: 'Montserrat',
		fontSize: 30,
		backgroundColor: fade(mainTheme.palette.secondary.dark, 0.5),
		borderRadius: 3,
		padding: 16,
		marginRight: 3,
	},
	paragraph_Secondary: {
		color: mainTheme.palette.secondary.contrastText,
		backgroundColor: fade(mainTheme.palette.secondary.dark, 0.5),
		borderRadius: 3,
		padding: 6,
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

export const landingStyle = makeStyles((theme) => ({
	paperContainer: {
		backgroundImage: `url(${require('../../Assets/Pictures/pexels-photo-4261793.jpeg')})`,
		backgroundRepeat: 'no-repeat',
		backgroundPosition: 'center center',
		backgroundAttachment: 'fixed',
		display: 'static',
		backgroundSize: 'cover',
		height: '100vh',
		overflow: 'hidden',
	},
}));

export const formStyle = makeStyles((theme) => ({
	formContainer: {
		textAlign: 'center',
		maxWidth: '75%',
		minWidth: '25%',
		padding: '3em',
		marginTop: '3em',
	},
	form: {
		postion: 'absolute',
		display: 'flex',
		flexDirection: 'column',
		flexFlow: 'column wrap',
		maxWidth: '75%',
		minWidth: '25%',
		padding: '3em',
	},
	inputField: {
		color: mainTheme.palette.secondary.contrastText,
		fontFamily: 'Montserrat',
		fontSize: '30px',
	},
	button: {
		fontSize: 15,
		fontFamily: 'neuton',
		background: mainTheme.palette.secondary.main,
		boxRadius: 3,
		marginTop: 50,
		margin: 5,
	},
}));

export const formInput = {
	style: {
		fontFamily: 'Montserrat',
	},
};

export const buttonCollapserStyle = makeStyles((theme) => ({
	buttonCollapse: {
		[theme.breakpoints.up('sm')]: {
			display: 'none',
		},
		margin: '10px',
		boxShadow: 'none',
	},
}));

export const barCollapserStyle = makeStyles((theme) => ({
	root: {
		position: 'absolute',
		right: 0,
	},
	buttonBar: {
		[theme.breakpoints.down('xs')]: {
			display: 'none',
		},
		margin: '10px',
		paddingLeft: '16px',
		right: 0,
		position: 'relative',
		width: '100%',
		background: 'transparent',
	},
}));
