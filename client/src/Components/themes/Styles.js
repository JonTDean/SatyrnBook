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
		marginTop: 20,
		marginRight: 20,
		marginLeft: 20,
		// margin: 20,
		width: '90%',
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
	formFieldBody: {
		backgroundImage: `url(${require('../../Assets/Pictures/adriano-pucciarelli-E_hJVT2fSac-unsplash.jpg')})`,
		backgroundRepeat: 'no-repeat',
		backgroundPosition: 'center center',
		backgroundAttachment: 'fixed',
		display: 'static',
		backgroundSize: 'cover',
		height: '100vh',
		overflow: 'hidden',
	},
	formFieldBodyDashboard: {
		backgroundImage: `url(${require('../../Assets/Pictures/pexels-pixabay-73873.jpg')})`,
		backgroundRepeat: 'no-repeat',
		backgroundPosition: 'center center',
		backgroundAttachment: 'fixed',
		display: 'static',
		backgroundSize: 'cover',
		height: '100vh',
		overflow: 'hidden',
	},
	formFieldBodyEdit: {
		backgroundImage: `url(${require('../../Assets/Pictures/pexels-pixabay-33109.jpg')})`,
		backgroundRepeat: 'no-repeat',
		backgroundPosition: 'center center',
		backgroundAttachment: 'fixed',
		display: 'static',
		backgroundSize: 'cover',
		height: '100vh',
		overflow: 'hidden',
	},
	formContainer: {
		textAlign: 'center',
		maxWidth: '75%',
		minWidth: '25%',
		padding: '1em',
	},
	formContainerAlt: {
		maxWidth: '75%',
		minWidth: '25%',
		maxHeight: '75%',
		minHeight: '25%',
		padding: '3em',
		marginTop: '6em',
		paddingBottom: '1em',
		marginBottom: '1em',
		overflowY: 'scroll',
	},
	form: {
		// postion: 'absolute',
		display: 'flex',
		flexDirection: 'column',
		flexFlow: 'column wrap',
		maxWidth: '75%',
		minWidth: '25%',
		paddingLeft: '3em',
		paddingRight: '3em',
	},
	editForm: {
		width: '100%',
		display: 'inline-block',
		justifyContent: 'center',
		textAlign: 'center',
	},
	formDiv: {
		maxHeight: '100%',
		minHeight: '50%',
		maxWidth: '100%',
		minWidth: '50%',
		marginBottom: '1em',
	},
	inputField: {
		color: mainTheme.palette.secondary.contrastText,
		fontFamily: 'Montserrat',
		fontSize: '30px',
	},
	textField: {
		color: mainTheme.palette.secondary.contrastText,
		height: '100%',
		width: '100%',
		fontFamily: 'Montserrat',
		fontSize: '30px',
		padding: '1em',
		margin: '3em',
	},
	button: {
		fontSize: 15,
		fontFamily: 'Montserrat',
		background: mainTheme.palette.secondary.light,
		boxRadius: 3,
		marginTop: 50,
		margin: 5,
	},
	buttonAlt: {
		fontSize: 15,
		fontFamily: 'Montserrat',
		background: mainTheme.palette.secondary.light,
		boxRadius: 3,
		padding: '2em',
		marginBottom: '3em',
		marginTop: '2em',
	},
}));

export const formInput = {
	style: {
		fontFamily: 'Montserrat',
	},
};

export const formInputAlt = {
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

export const tableStyle = makeStyles((theme) => ({
	main: {
		background: mainTheme.palette.secondary.dark,
		color: mainTheme.palette.secondary.main,
	},
}));
