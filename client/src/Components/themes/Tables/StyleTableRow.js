import { withStyles } from '@material-ui/core/styles';
import TableRow from '@material-ui/core/TableRow';
import { mainTheme } from '../Themes';

const StyledTableRow = withStyles((theme) => ({
	root: {
		'&:nth-of-type(odd)': {
			backgroundColor: mainTheme.palette.primary.dark,
		},
		'&:nth-of-type(even)': {
			backgroundColor: mainTheme.palette.primary.light,
		},
	},
}))(TableRow);

export default StyledTableRow;
