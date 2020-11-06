// %Imports
import React from 'react';
// %Styling
import { formStyle, formInputAlt } from '../../../../../themes/Styles';
import TextField from '@material-ui/core/TextField';

const Degree = ({ degree, onChange }) => {
	return (
		<div className={formStyle().formDiv}>
			<TextField
				className={formStyle().textField}
				inputprops={formInputAlt}
				inputlabelprops={formInputAlt}
				id="degree-field"
				label="Degree"
				helperText="What degree did you get?"
				name="degree"
				value={degree}
				onChange={onChange}
			/>
		</div>
	);
};

export default Degree;
