// %Imports
import React from 'react';
// %Styling
import { formStyle, formInputAlt } from '../../../../../themes/Styles';
import TextField from '@material-ui/core/TextField';

const FromDate = ({ from, onChange }) => {
	return (
		<div className={formStyle().formDiv}>
			<TextField
				inputprops={formInputAlt}
				inputlabelprops={formInputAlt}
				id="from-field"
				label="From"
				helperText="When did you begin work at this company?"
				className={formStyle().textField}
				name="from"
				value={from}
				onChange={onChange}
			/>
		</div>
	);
};

export default FromDate;
