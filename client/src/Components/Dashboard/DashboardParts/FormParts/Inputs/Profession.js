// %Imports
import React from 'react';
// %Styling
import { formStyle, formInput } from '../../../../themes/Styles';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';

const Profession = ({ status, onChange }) => {
	return (
		<div className={formStyle().formDiv}>
			<InputLabel id="profession-label">
				* Are you a Teacher or a Student?
			</InputLabel>
			<Select
				inputprops={formInput}
				inputlabelprops={formInput}
				labelId="profession-label"
				id="profession"
				name="status"
				value={status}
				onChange={onChange}
			>
				<MenuItem value={'Educator'}>Teacher</MenuItem>
				<MenuItem value={'Student'}>Student</MenuItem>
			</Select>
		</div>
	);
};

export default Profession;
