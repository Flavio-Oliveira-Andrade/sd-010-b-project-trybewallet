// Configure os seus reducers.
// ATENÇÃO: você obrigatoriamente tem que utilizar as chaves "user" e "wallet" no seu estado global

import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import userReducer from './user';
import walletReducer from './wallet';

const rootReducers = combineReducers({
  user: userReducer,
  wallet: walletReducer,
});

const store = createStore(
  rootReducers,
  composeWithDevTools(),
);

export default store;
