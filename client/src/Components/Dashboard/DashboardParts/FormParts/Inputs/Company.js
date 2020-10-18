// %Imports
import React from 'react';
// %Styling
import { formStyle, formInputAlt } from '../../../../themes/Styles';
import TextField from '@material-ui/core/TextField';

const Company = ({ company, onChange }) => {
	return (
		<div className={formStyle().formDiv}>
			<TextField
				inputprops={formInputAlt}
				inputlabelprops={formInputAlt}
				id="company-field"
				label="Current Company"
				helperText="Enter your Company Name"
				className={formStyle().textField}
				name="company"
				value={company}
				onChange={onChange}
			/>
		</div>
	);
};

export default Company;
