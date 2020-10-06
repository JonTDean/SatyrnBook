// %Imports
import React, { Fragment } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
// %Styling
import './css/main.css';
import Grid from '@material-ui/core/Grid';
// %Components
import Navbar from './Components/Layout/Navbar';
import Landing from './Components/Layout/Landing';

const App = () => (
	<Fragment>
		<Navbar />
		<Grid
			container
			spacing={0}
			direction="column"
			alignItems="center"
			justify="center"
			style={{ minHeight: '70vh' }}
		>
			<Landing />
		</Grid>
	</Fragment>
);
export default App;
