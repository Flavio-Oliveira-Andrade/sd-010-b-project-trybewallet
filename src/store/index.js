import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { userReducers, walletReducers } from '../reducers';

const rootReducers = combineReducers({
  user: userReducers,
  wallet: walletReducers,
});

const store = createStore(
  rootReducers,
  composeWithDevTools(
    applyMiddleware(thunk),
  ),
);

export default store;
