// %Imports
import React from 'react';
// %Styling
import { formStyle, formInputAlt } from '../../../../../themes/Styles';
import TextField from '@material-ui/core/TextField';

const School = ({ school, onChange }) => {
	return (
		<div className={formStyle().formDiv}>
			<TextField
				inputprops={formInputAlt}
				inputlabelprops={formInputAlt}
				id="school-field"
				label="School"
				helperText="What school did you go to?"
				className={formStyle().textField}
				name="school"
				value={school}
				onChange={onChange}
			/>
		</div>
	);
};

export default School;
