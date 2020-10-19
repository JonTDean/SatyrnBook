// %Imports
import React from 'react';
// %Styling
import { formStyle, formInputAlt } from '../../../../../themes/Styles';
import TextField from '@material-ui/core/TextField';

const JobDescription = (description, onChange) => {
	return (
		<div className={formStyle().formDiv}>
			<TextField
				inputprops={formInputAlt}
				inputlabelprops={formInputAlt}
				multiline
				rows={2}
				rowsMax={4}
				id="description-field"
				label="Describe yourself"
				helperText="Please describe your Position."
				className={formStyle().textField}
				// name="description"
				// value={description}
				onChange={onChange}
			/>
		</div>
	);
};

export default JobDescription;
