// %Imports
import React from 'react';
// %Styling
import { formStyle, formInputAlt } from '../../../../../themes/Styles';
import TextField from '@material-ui/core/TextField';
import DateFnsUtils from '@date-io/date-fns';
import {
	MuiPickersUtilsProvider,
	KeyboardDatePicker,
} from '@material-ui/pickers';

const FromDate = ({ from, onChange }) => {
	const [selectedDate, setSelectedDate] = React.useState(new Date());

	return (
		<div className={formStyle().formDiv}>
			<MuiPickersUtilsProvider utils={DateFnsUtils}>
				<KeyboardDatePicker
					disableToolbar
					inputprops={formInputAlt}
					inputlabelprops={formInputAlt}
					variant="inline"
					format="MM/dd/yyyy"
					margin="normal"
					id="from-field"
					label="From"
					helperText="When did you begin work at this company?"
					className={formStyle().textField}
					name="from"
					value={from}
					onChange={onChange}
					// KeyboardButtonProps={{
					// 	'aria-label': 'change date',
					// }}
				/>
			</MuiPickersUtilsProvider>
			{/* <TextField
				inputprops={formInputAlt}
				inputlabelprops={formInputAlt}
				id="from-field"
				label="From"
				helperText="When did you begin work at this company?"
				className={formStyle().textField}
				name="from"
				value={from}
				onChange={onChange}
			/> */}
		</div>
	);
};

export default FromDate;
