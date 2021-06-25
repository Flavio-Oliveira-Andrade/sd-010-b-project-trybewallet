import { combineReducers } from 'redux';
import userReducer from './user';
import walletReducer from './wallet';

const reducer = combineReducers({
  user: userReducer,
  wallet: walletReducer,
});

export default reducer;
