// %Imports
import React from 'react';
// %Styling
import { formStyle, formInputAlt } from '../../../../../themes/Styles';
import TextField from '@material-ui/core/TextField';

const ToDate = ({ to, current, onChange, toDateDisabled, toggleDisabled }) => {
	return (
		<div className={formStyle().formDiv}>
			<TextField
				inputprops={formInputAlt}
				inputlabelprops={formInputAlt}
				id="to-field"
				label="to"
				helperText="When did you stop work at this Company?"
				className={formStyle().textField}
				name="to"
				value={to}
				onChange={onChange}
			/>
		</div>
	);
};

export default ToDate;
