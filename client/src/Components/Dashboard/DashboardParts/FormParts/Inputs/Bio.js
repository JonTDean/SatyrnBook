// %Imports
import React from 'react';
// %Styling
import { formStyle, formInputAlt } from '../../../../themes/Styles';
import TextField from '@material-ui/core/TextField';

const Bio = ({ bio, onChange }) => {
	return (
		<div className={formStyle().formDiv}>
			<TextField
				inputprops={formInputAlt}
				inputlabelprops={formInputAlt}
				multiline
				rows={2}
				rowsMax={4}
				id="bio-field"
				label="Write a Bio"
				helperText="Describe yourself in a short Bio"
				className={formStyle().textField}
				name="bio"
				value={bio}
				onChange={onChange}
			/>
		</div>
	);
};

export default Bio;
