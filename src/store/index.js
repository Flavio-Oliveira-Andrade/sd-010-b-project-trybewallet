import { combineReducers, createStore } from 'redux';
import userReducer from '../reducers/user';
import walletReducer from '../reducers/wallet';

const rootReducer = combineReducers({
  userReducer,
  walletReducer,
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
