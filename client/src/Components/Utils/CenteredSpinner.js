// %Imports
import React from 'react';
// % Styling
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';

const CenteredSpinner = () => {
	return (
		<Grid
			container
			direction="column"
			justify="center"
			alignItems="center"
			style={{ height: '110vh' }}
		>
			<CircularProgress />
		</Grid>
	);
};

export default CenteredSpinner;
