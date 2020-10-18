// %Imports
import React from 'react';
// %Styling
import { formStyle, formInputAlt } from '../../../../themes/Styles';
import TextField from '@material-ui/core/TextField';

const Website = ({ website, onChange }) => {
	return (
		<div className={formStyle().formDiv}>
			<TextField
				inputprops={formInputAlt}
				inputlabelprops={formInputAlt}
				id="website-field"
				label="Current Website"
				helperText="Enter your Website Name"
				className={formStyle().textField}
				name="website"
				value={website}
				onChange={onChange}
			/>
		</div>
	);
};

export default Website;
