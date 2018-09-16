import axios from 'axios';

import { 
	GET_DATA,
	SET_VALUE_AMOUNT,
	SET_VALUE_MONTH,
	CHANGE_CURRENCY,
	SET_IS_MONTHLY,
	SET_PERCENT,
	SET_WHOLE_TERM,
	SET_EVERY_MONTHLY,
} from '../constants/currencyTypes';

export const setWholeTerm = value => (dispatch) => { dispatch({ type: SET_WHOLE_TERM, payload: value }); };
export const setEveryMonthly = value => (dispatch) => { dispatch({ type: SET_EVERY_MONTHLY, payload: value }); };

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
	dispatch(monthlyIncome());
};

export const setValueAmount = value => (dispatch) => { 
	dispatch({ type: SET_VALUE_AMOUNT, payload: value }); 
	dispatch(monthlyIncome());
};
export const setValueMonth = value => (dispatch, getState) => {
	const state = getState();
	const { data } = state.data;
	const { currentCurrency, monthly } = state.currentDataUser;

	let percent = 0;

	var getCurrentCurrencyData = data[currentCurrency.toLowerCase()];
	console.log(data);
	getCurrentCurrencyData.data.some((item) => {
		if (item.range_month.min <= value && item.range_month.max >= value) {
			percent = monthly ? item.percent.monthly : item.percent.last;
			return true;
		}
	});

	dispatch({ type: SET_VALUE_MONTH, payload: value });
	dispatch({ type: SET_PERCENT, payload: percent });
	dispatch(monthlyIncome());
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
	dispatch(monthlyIncome());
};

export const getData = data => (dispatch, getState) => {
	axios.get('http://localhost:3001/data').then((response) => {
		dispatch({ type: GET_DATA, payload: response.data });
		dispatch(setValueMonth(3)); // first month
		dispatch(setValueAmount(1000)); // first amount
		dispatch(monthlyIncome());
	});
};

export const monthlyIncome = () => (dispatch, getState) => {
	const { valueAmount, valueMonth, monthly, percent } = getState().currentDataUser;
	let amount = 0;
	let whole_term = 0;
	if (monthly) {
		amount = (valueAmount * percent/100)/12;
		whole_term = amount * valueMonth;
		dispatch(setEveryMonthly(amount));
		dispatch(setWholeTerm(whole_term));
	}
	if (!monthly) {
		amount = Math.pow((valueAmount * ((1 + percent/100)/12)), valueMonth) - valueAmount;
		whole_term = amount/12;
		dispatch(setEveryMonthly(amount));
		dispatch(setWholeTerm(whole_term));
	}

};