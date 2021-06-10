import { createStore } from 'redux';
import mergedReducers from '../reducers/index';

const store = createStore(
  mergedReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
