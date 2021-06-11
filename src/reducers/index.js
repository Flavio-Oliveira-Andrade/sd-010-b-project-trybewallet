import { combineReducers } from 'redux';
import userReducer from './user';
import walletReducer from './wallet';

export const GLOBAL_STATE = {
  user: {
    email: '',
  },
  wallet: {
    currencies: [],
    expenses: [],
  },
};

export default combineReducers({
  user: userReducer,
  wallet: walletReducer,
});
