// %Imports
import React from 'react';
// %Styling
import { formStyle, formInputAlt } from '../../../../../themes/Styles';
import TextField from '@material-ui/core/TextField';

const JobDescription = ({ description, onChange }) => {
	console.log('Job Description:', description);

	return (
		<div className={formStyle().formDiv}>
			<TextField
				inputprops={formInputAlt}
				inputlabelprops={formInputAlt}
				className={formStyle().textField}
				multiline
				rows={2}
				rowsMax={4}
				id="description-field"
				label="Describe yourself"
				helperText="Please describe your Position."
				name="description"
				value={description.toString()}
				onChange={onChange}
			/>
		</div>
	);
};

export default JobDescription;
