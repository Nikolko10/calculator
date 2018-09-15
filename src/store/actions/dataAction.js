import axios from 'axios';

import { GET_DATA } from '../constants/currencyTypes';

export const getData = data => (dispatch, getState) => {
	axios.get('http://localhost:3001/data').then((response) => {
		console.log(response.data);
		dispatch({ type: GET_DATA, payload: response.data });
	});
};