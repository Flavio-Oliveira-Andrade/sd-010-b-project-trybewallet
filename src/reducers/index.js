import { combineReducers } from 'redux';
import user from './user';
import wallet from './wallet';
// import loginReducer from './login'; USER
// import registerReducer from './register'; WALLET

const rootReducers = combineReducers({ wallet, user });

export default rootReducers;
