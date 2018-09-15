import {  
   GET_DATA, 
} from '../constants/currencyTypes';

const initialState = {
     data: {},
};

const currency = (state = initialState, action) => {
   switch (action.type) {
       case GET_DATA:
          return {
            data: action.payload.data,
          };
       default:
           break;
   }

   return state;
};

export default currency;