import { combineReducers } from 'redux';
import userReducer from './user';
import walletReducer from './wallet';
// import wallet from './wallet';
const reducers = combineReducers({
  user: userReducer,
  wallet: walletReducer,
});
// Configure os seus reducers.
// ATENÇÃO: você obrigatoriamente tem que utilizar as chaves "user" e "wallet" no seu estado global

export default reducers;
