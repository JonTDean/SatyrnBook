import axios from 'axios';
import store from '../../store';
import { LOGOUT } from '../actions/types';

const api = axios.create({
	baseURL: '/api',
	headers: {
		'Content-Type': 'application/json',
	},
});

//  Check if the token is no longer Valid/Expired.
//  logout the user if the above is true.

// api.interceptors.response.use(
// 	(res) => res,
// 	(err) => {
// 		if (err.response.status === 401) {
// 			store.dispatch({ type: LOGOUT });
// 		}
// 		return Promise.reject(err);
// 	}
// );

export default api;
