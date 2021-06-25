import { combineReducers } from 'redux';
import user from './user';
import wallet from './wallet';

const Reducers = combineReducers({
  user,
  wallet,
});

export default Reducers;
