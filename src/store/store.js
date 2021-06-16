import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import mergedReducers from '../reducers/index';

const store = createStore(
  mergedReducers,
  composeWithDevTools(
    applyMiddleware(thunk),
  ),
);

export default store;
