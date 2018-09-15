import {  
   GET_DATA, 
} from '../constants/currencyTypes';

const initialState = {
     data: {},
};

const data = (state = initialState, action) => {
   switch (action.type) {
       case GET_DATA:
          return {
            data: { ...action.payload },
          };
       default:
           break;
   }

   return state;
};

export default data;