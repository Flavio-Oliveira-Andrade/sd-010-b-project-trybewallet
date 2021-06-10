import { createStore } from 'redux';
import reducerUsuario from '../reducers/user';

const store = createStore(reducerUsuario,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
