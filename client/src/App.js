// %Imports
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// %%REDUX
import { Provider } from 'react-redux';
import setAuthToken from './redux/utils/setAuthToken';
import { loadUser } from './redux/actions/auth';
import store from './store';
// %Styling
import { ThemeProvider } from '@material-ui/core/styles';
import { mainTheme } from './Components/themes/Themes';
// %Components
import Navbar from './Components/Layout/Navbar/Navbar';
import Landing from './Components/Layout/Landing';
import Register from './Components/Auth/Register/Register';
import Login from './Components/Auth/Login/Login';
import Dashboard from './Components/Dashboard/Dashboard';
import PrivateRoute from './Components/routing/PrivateRoute';

if (localStorage.token) {
	setAuthToken(localStorage.token);
}

const App = () => {
	useEffect(() => {
		store.dispatch(loadUser());
	}, []);

	return (
		<Provider store={store}>
			<ThemeProvider theme={mainTheme}>
				<Router>
					<Navbar />
					<Switch>
						<Route exact path="/" component={Landing} />
						<Route exact path="/register" component={Register} />
						<Route exact path="/login" component={Login} />
						<PrivateRoute exact path="/dashboard" component={Dashboard} />
					</Switch>
				</Router>
			</ThemeProvider>
		</Provider>
	);
};
export default App;
