// %Import
import React from 'react';

// %Styling
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';

const Landing = () => {
	return (
		<Grid container direction="column" justify="center" alignItems="center">
			<h1>Meet with other developers!</h1>
			<p>
				Connect with other developers, share code, get portfolio help and more
				when you register!
			</p>
			<div>
				<Button>Sign Up</Button>
				<Button>Login</Button>
			</div>
		</Grid>
	);
};

export default Landing;
