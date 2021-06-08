import { combineReducers } from 'redux';
import user from './user';
import wallet from './wallet';

const listReducer = combineReducers({ user, wallet });

export default listReducer;
