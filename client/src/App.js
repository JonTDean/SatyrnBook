// %Imports
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
// %Styling
import { ThemeProvider } from '@material-ui/core/styles';
import { mainTheme } from './Components/themes/Themes';
// %Components
import Navbar from './Components/Layout/Navbar/Navbar';
import Landing from './Components/Layout/Landing';
import Register from './Components/Auth/Register/Register';
import Login from './Components/Auth/Login/Login';

const App = () => (
	<Provider store={store}>
		<ThemeProvider theme={mainTheme}>
			<Router>
				<Navbar />
				<Switch>
					<Route exact path="/" component={Landing} />
					<Route exact path="/register" component={Register} />
					<Route exact path="/login" component={Login} />
				</Switch>
			</Router>
		</ThemeProvider>
	</Provider>
);
export default App;
