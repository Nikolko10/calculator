import {  
    SET_VALUE_AMOUNT,
    SET_VALUE_MONTH,
    CHANGE_CURRENCY,
    SET_PERCENT,
    SET_IS_MONTHLY,
    SET_WHOLE_TERM,
    SET_EVERY_MONTHLY,
} from '../constants/currencyTypes';

const initialState = {
    currentCurrency: 'UAH',
    valueMonth: 0,
    valueAmount: 0,
    percent: 0,
    monthly: true,
    wholeTerm: 0,
    everyMonthly: 0,
};

const currentDataUser = (state = initialState, action) => {
   switch (action.type) {
      case SET_VALUE_MONTH:
        return {
          ...state,
          valueMonth: action.payload,
        };
      case SET_VALUE_AMOUNT:
        return {
          ...state,
          valueAmount: action.payload,
        };
      case CHANGE_CURRENCY:
        return {
          ...state,
          currentCurrency: action.payload,
        };
      case SET_PERCENT:
        return {
          ...state,
          percent: action.payload,
        };
      case SET_IS_MONTHLY:
        return {
          ...state,
          monthly: action.payload,
        };
      case SET_WHOLE_TERM:
        return {
          ...state,
          wholeTerm: action.payload,
        };
      case SET_EVERY_MONTHLY:
        return {
          ...state,
          everyMonthly: action.payload,
        };
      default:
          break;
   }

   return state;
};

export default currentDataUser;