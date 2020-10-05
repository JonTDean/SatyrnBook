// %Imports
import { createMuiTheme, makeStyles } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';
// %Styling
import 'typeface-montserrat';

export const mainTheme = createMuiTheme({
	palette: {
		primary: {
			light: '#edd04c',
			main: '#b79f12',
			dark: '#837100',
			contrastText: '#000000',
		},
		secondary: {
			light: '#a79a3d',
			main: '#756c0a',
			dark: '#474100',
			contrastText: '#ffffff',
		},
	},
});

export const useStyles = makeStyles((theme) => ({
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
		color: mainTheme.palette.primary.contrastText,
		marginRight: theme.spacing(2),
		fontFamily: 'Montserrat',
		fontSize: 13,
		textShadow: '1.1px 0.9px 0px rgba(0,0,0,0.5) ;',
	},
	paragraphs: {
		color: mainTheme.palette.primary.contrastText,
		fontFamily: '',
		fontSize: 12,
	},
	navLayout: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	navBar: {
		background: fade(mainTheme.palette.secondary.main, 0.5),
	},
}));
