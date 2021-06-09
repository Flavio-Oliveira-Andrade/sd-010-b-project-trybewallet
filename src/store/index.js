import { createStore/* , applyMiddleware */ } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import thunk from 'redux-thunk';
import rootReducers from '../reducers';

const store = createStore(
  rootReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  // composeWithDevTools(
  //   applyMiddleware(thunk),

);

export default store;
