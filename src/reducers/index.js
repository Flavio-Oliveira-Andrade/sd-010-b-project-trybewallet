import { combineReducers } from 'redux';
import userLogin from './user';
import walletReducer from './wallet';

// ATENÇÃO: você obrigatoriamente tem que utilizar as chaves "user" e "wallet" no seu estado global

const Reducer = combineReducers({
  user: userLogin,
  wallet: walletReducer,
});

export default Reducer;
