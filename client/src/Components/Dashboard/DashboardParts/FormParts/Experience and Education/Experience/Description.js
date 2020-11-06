// %Imports
import React from 'react';
// %Styling
import { formStyle, formInputAlt } from '../../../../../themes/Styles';
import TextField from '@material-ui/core/TextField';

const Description = ({ description, onChange }) => {
	// console.log('Description:', description);

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
				label="Describe this place"
				helperText="Give a description of your time there."
				name="description"
				value={description.toString()}
				onChange={onChange}
			/>
		</div>
	);
};

export default Description;
