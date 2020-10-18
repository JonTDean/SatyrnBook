// %Imports
import React from 'react';
// %Styling
import TextField from '@material-ui/core/TextField';
import FacebookIcon from '@material-ui/icons/Facebook';
import InputAdornment from '@material-ui/core/InputAdornment';

const Facebook = ({ self, onChange }) => {
	return (
		<>
			<TextField
				id="facebook-field"
				label="Facebook Account"
				helperText="Enter your Facebook Username"
				InputProps={{
					startAdornment: (
						<InputAdornment position="start">
							<FacebookIcon color="primary" />
						</InputAdornment>
					),
				}}
				onChange={onChange}
				name="facebook"
				value={self}
			/>
		</>
	);
};

export default Facebook;
