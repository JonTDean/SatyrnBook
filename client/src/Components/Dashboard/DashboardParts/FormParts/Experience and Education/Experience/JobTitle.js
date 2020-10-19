// %Imports
import React from 'react';
// %Styling
import { formStyle, formInputAlt } from '../../../../../themes/Styles';
import TextField from '@material-ui/core/TextField';

const JobTitle = ({ title, onChange }) => {
	return (
		<div className={formStyle().formDiv}>
			<TextField
				inputprops={formInputAlt}
				inputlabelprops={formInputAlt}
				id="title-field"
				label="Title"
				helperText="Please explain your Job Title."
				className={formStyle().textField}
				name="title"
				value={title}
				onChange={onChange}
			/>
		</div>
	);
};

export default JobTitle;
