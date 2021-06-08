import { createStore, combineReducers } from 'redux';
import walletReducer from '../reducers/wallet';
import userReducer from '../reducers/user';

const reducers = combineReducers({
  walletReducer,
  userReducer,
});

const store = createStore(reducers);

export default store;
