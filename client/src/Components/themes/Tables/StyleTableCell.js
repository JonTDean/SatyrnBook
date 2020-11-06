import { withStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import { mainTheme } from '../Themes';

const StyledTableCell = withStyles((theme) => ({
	head: {
		backgroundColor: mainTheme.palette.primary.contrastText,
		color: mainTheme.palette.secondary.contrastText,
	},
	body: {
		fontSize: 14,
	},
}))(TableCell);

export default StyledTableCell;
