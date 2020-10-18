// %Imports
import React from 'react';
// %Styling
import TextField from '@material-ui/core/TextField';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InputAdornment from '@material-ui/core/InputAdornment';

const YouTube = ({ self, onChange }) => {
	return (
		<>
			<TextField
				id="youtube-field"
				label="Youtube Account"
				helperText="Enter your Youtube Username"
				InputProps={{
					startAdornment: (
						<InputAdornment position="start">
							<YouTubeIcon color="secondary" />
						</InputAdornment>
					),
				}}
				onChange={onChange}
				name="youtube"
				value={self}
			/>
		</>
	);
};

export default YouTube;
