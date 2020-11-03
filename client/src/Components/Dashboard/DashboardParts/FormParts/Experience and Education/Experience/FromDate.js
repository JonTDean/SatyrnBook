// %Imports
import React from 'react';
// %Styling
import { formStyle, formInputAlt } from '../../../../../themes/Styles';
import TextField from '@material-ui/core/TextField';

const FromDate = ({ from, onChange }) => {
	// console.log('From Date:', from);
	
	return (
		<div className={formStyle().formDiv}>
			<TextField
				className={formStyle().textField}
				inputprops={formInputAlt}
				inputlabelprops={formInputAlt}
				InputLabelProps={{
					shrink: true,
				}}
				id="from"
				name="from"
				label="From"
				type="date"
				value={from}
				onChange={onChange}
			/>
		</div>
	);
};

export default FromDate;
