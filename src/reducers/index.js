import { combineReducers } from 'redux';
import userReducer from './user';
import walletReducer from './wallet';

// Configure os seus reducers.
const mergedReducers = combineReducers({ userReducer, walletReducer });

export default mergedReducers;
// ATENÇÃO: você obrigatoriamente tem que utilizar as chaves "user" e "wallet" no seu estado global
