// %Imports
import React from 'react';
// %Styling
import TextField from '@material-ui/core/TextField';
import InstagramIcon from '@material-ui/icons/Instagram';
import InputAdornment from '@material-ui/core/InputAdornment';

const Instagram = ({ self, onChange }) => {
	return (
		<>
			<TextField
				id="instagram-field"
				label="Instagram Account"
				helperText="Enter your Instagram Username"
				InputProps={{
					startAdornment: (
						<InputAdornment position="start">
							<InstagramIcon />
						</InputAdornment>
					),
				}}
				onChange={onChange}
				name="instagram"
				value={self}
			/>
		</>
	);
};

export default Instagram;
