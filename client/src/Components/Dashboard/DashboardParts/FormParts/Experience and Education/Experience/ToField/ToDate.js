// %Imports
import React from 'react';
// %Styling
import { formStyle, formInputAlt } from '../../../../../../themes/Styles';
import TextField from '@material-ui/core/TextField';

const ToDate = ({ to, toDateDisabled, onChange }) => {
	// console.log('To Date:', to);

	return (
		<TextField
			style={{ width: '80%'}}
			inputprops={formInputAlt}
			inputlabelprops={formInputAlt}
			InputLabelProps={{ shrink: true }}
			className={formStyle().textField}
			id="to"
			name="to"
			label="To"
			type="date"
			value={to}
			onChange={onChange}
			disabled={toDateDisabled ? true : false}
		/>
	);
};

export default ToDate;
