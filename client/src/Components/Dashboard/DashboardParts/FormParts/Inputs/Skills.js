// %Imports
import React from 'react';
// %Styling
import { formStyle, formInputAlt } from '../../../../themes/Styles';
import TextField from '@material-ui/core/TextField';

const Skills = ({ skills, onChange }) => {
	return (
		<div className={formStyle().formDiv}>
			<TextField
				inputprops={formInputAlt}
				inputlabelprops={formInputAlt}
				id="skills-field"
				label="Your Skills"
				helperText="* Enter your Skills, separated by a comma, i.e.(JS,React,NodeJS)"
				className={formStyle().textField}
				name="skills"
				value={skills}
				onChange={onChange}
			/>
		</div>
	);
};

export default Skills;
