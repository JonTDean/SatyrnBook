// %Imports
import React from 'react';
// %Styling
import { formStyle, formInputAlt } from '../../../../themes/Styles';
import TextField from '@material-ui/core/TextField';

const GithubUsername = ({ githubusername, onChange }) => {
	return (
		<div className={formStyle().formDiv}>
			<TextField
				inputprops={formInputAlt}
				inputlabelprops={formInputAlt}
				id="githubusername-field"
				label="Current Github Username"
				helperText="Enter your Website Name"
				className={formStyle().textField}
				name="githubusername"
				value={githubusername}
				onChange={onChange}
			/>
		</div>
	);
};

export default GithubUsername;
