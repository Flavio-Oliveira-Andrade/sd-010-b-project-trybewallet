import { combineReducers } from 'redux';
import emailReducer from './user';
import wallet from './wallet';

const reducer = combineReducers({
  user: emailReducer,
  wallet,
});

export default reducer;
