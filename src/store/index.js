import { createStore,
  // applyMiddleware
} from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import thunk from 'redux-thunk';
import rootReducer from '../reducers';

const store = createStore(
  rootReducer,
  // composeWithDevTools(
  //   applyMiddleware(thunk),
  // ),
);
// Necessário por existir uma requisição assincrona
// Aguardar chamada de API
export default store;
