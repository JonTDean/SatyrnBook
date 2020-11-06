// %Imports
import React from 'react';
// %Styling
import { formStyle, formInputAlt } from '../../../../../themes/Styles';
import TextField from '@material-ui/core/TextField';

const FieldOfStudy = ({ fieldofstudy, onChange }) => {
	return (
		<div className={formStyle().formDiv}>
			<TextField
				inputprops={formInputAlt}
				inputlabelprops={formInputAlt}
				id="fieldofstudy-field"
				label="Field of Study"
				helperText="What was your field of study?"
				className={formStyle().textField}
				name="fieldofstudy"
				value={fieldofstudy}
				onChange={onChange}
			/>
		</div>
	);
};

export default FieldOfStudy;
