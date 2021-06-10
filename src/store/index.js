import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducer from '../reducers';

const store = createStore(
  reducer,
  // forma mais atual de utilizar os DevTools
  composeWithDevTools(
    applyMiddleware(thunk),
  ),
);

export default store;
