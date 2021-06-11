import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

/* import { userReducers, walletReducers } from '../reducers'; */

/* const rootReducers = combineReducers({
  user: userReducers,
  wallet: walletReducers,
}); */

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk),
  ),
);

export default store;
