// %Imports
import React from 'react';
// %Styling
import { formStyle, formInputAlt } from '../../../../themes/Styles';
import TextField from '@material-ui/core/TextField';

const Location = ({ location, onChange }) => {
	return (
		<div className={formStyle().formDiv}>
			<TextField
				inputprops={formInputAlt}
				inputlabelprops={formInputAlt}
				id="location-field"
				label="Current Location"
				helperText="Enter your current Location"
				className={formStyle().textField}
				name="location"
				value={location}
				onChange={onChange}
			/>
		</div>
	);
};

export default Location;
