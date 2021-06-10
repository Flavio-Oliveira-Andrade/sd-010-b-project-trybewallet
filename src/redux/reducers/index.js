import { combineReducers } from 'redux';

import userReducer from './userReducer';
import walletReducer from './walletReducer';
import loginReducer from './loginReducer';

export default combineReducers({ userReducer, walletReducer, loginReducer });
