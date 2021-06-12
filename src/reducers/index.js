import { combineReducers } from 'redux';
import userReducer from './user';
import walletReducer from './wallet';

const myReducer = combineReducers({
  user: userReducer,
  wallet: walletReducer,
});

export default myReducer;
