// %Imports
import React from 'react';
// %Styling
import TextField from '@material-ui/core/TextField';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InputAdornment from '@material-ui/core/InputAdornment';

const LinkedIn = ({ self, onChange }) => {
	return (
		<>
			<TextField
				id="linkedin-field"
				label="LinkedIn Account"
				helperText="Enter your LinkedIn Username"
				InputProps={{
					startAdornment: (
						<InputAdornment position="start">
							<LinkedInIcon color="primary" />
						</InputAdornment>
					),
				}}
				onChange={onChange}
				name="linkedin"
				value={self}
			/>
		</>
	);
};

export default LinkedIn;
