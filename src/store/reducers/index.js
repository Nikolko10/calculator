import { combineReducers } from 'redux';
import data from './data';
import currentDataUser from './currentDataUser';

const rootReducer = combineReducers({
  data,
  currentDataUser,
});

export default rootReducer;
