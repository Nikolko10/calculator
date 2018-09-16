import axios from 'axios';

import { 
	GET_DATA,
	SET_VALUE_AMOUNT,
	SET_VALUE_MONTH,
	CHANGE_CURRENCY,
	SET_IS_MONTHLY,
	SET_PERCENT,
} from '../constants/currencyTypes';

export const changeCurrency = value => (dispatch, getState) => {
	dispatch({ type: CHANGE_CURRENCY, payload: value });

	const state = getState();
	const { data } = state.data;
	const { currentCurrency, monthly, valueMonth } = state.currentDataUser;

	let percent = 0;

	var getCurrentCurrencyData = data[currentCurrency.toLowerCase()];
	getCurrentCurrencyData.data.some((item) => {
		if (item.range_month.min <= valueMonth && item.range_month.max >= valueMonth) {
			percent = monthly ? item.percent.monthly : item.percent.last;
			return true;
		}
	});

	dispatch({ type: SET_PERCENT, payload: percent });
};

export const setValueAmount = value => (dispatch) => { dispatch({ type: SET_VALUE_AMOUNT, payload: value }); };
export const setValueMonth = value => (dispatch, getState) => {
	const state = getState();
	const { data } = state.data;
	const { currentCurrency, monthly } = state.currentDataUser;

	let percent = 0;

	var getCurrentCurrencyData = data[currentCurrency.toLowerCase()];
	getCurrentCurrencyData.data.some((item) => {
		if (item.range_month.min <= value && item.range_month.max >= value) {
			percent = monthly ? item.percent.monthly : item.percent.last;
			return true;
		}
	});

	dispatch({ type: SET_VALUE_MONTH, payload: value });
	dispatch({ type: SET_PERCENT, payload: percent });
};

export const setIsMonthly = bool => (dispatch, getState) => {
	dispatch({ type: SET_IS_MONTHLY, payload: bool });

	const state = getState();
	const { data } = state.data;
	const { currentCurrency, monthly, valueMonth } = state.currentDataUser;

	let percent = 0;

	var getCurrentCurrencyData = data[currentCurrency.toLowerCase()];
	getCurrentCurrencyData.data.some((item) => {
		if (item.range_month.min <= valueMonth && item.range_month.max >= valueMonth) {
			percent = monthly ? item.percent.monthly : item.percent.last;
			return true;
		}
	});

	dispatch({ type: SET_PERCENT, payload: percent });
};

export const getData = data => (dispatch, getState) => {
	axios.get('http://localhost:3001/data').then((response) => {
		dispatch({ type: GET_DATA, payload: response.data });
	});
};

export const monthlyIncome = (sum, per) => (dispatch, getState) => {
	console.log(sum, per);
};

export const fullTimeIncome = (sum, per, month) => (dispatch, getState) => {
	console.log(sum, per, month);
};