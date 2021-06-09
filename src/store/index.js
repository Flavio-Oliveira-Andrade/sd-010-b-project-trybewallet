// aqui eu vou colocar as coisas da store
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

const store = createStore(
// o README me disse pra usar este applyMiddleware(thunk) e também me disse como fazer as importações.
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk),
  ),
);
export default store;
