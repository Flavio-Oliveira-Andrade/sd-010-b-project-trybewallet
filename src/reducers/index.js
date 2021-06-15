import { combineReducers } from 'redux';
import user from './user';
import wallet from './wallet';

// usamos para armazenar o " estado " dos reducers

export default combineReducers({
  user,
  wallet,
});
