import { combineReducers } from 'redux';
import user from './user';
import wallet from './wallet';

const rootReducer = combineReducers({
  login: user,
  wallet,
});

export default rootReducer;
