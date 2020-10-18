// %Imports
import React from 'react';
// %Styling
import TextField from '@material-ui/core/TextField';
import TwitterIcon from '@material-ui/icons/Twitter';
import InputAdornment from '@material-ui/core/InputAdornment';

const Twitter = ({ self, onChange }) => {
	return (
		<>
			<TextField
				id="twitter-field"
				label="Twitter Account"
				helperText="Enter your Twitter Username"
				InputProps={{
					startAdornment: (
						<InputAdornment position="start">
							<TwitterIcon />
						</InputAdornment>
					),
				}}
				onChange={onChange}
				name="twitter"
				value={self}
			/>
		</>
	);
};

export default Twitter;
