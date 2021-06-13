// Configure os seus reducers.
// ATENÇÃO: você obrigatoriamente tem que utilizar as chaves "user" e "wallet" no seu estado global
import { combineReducers } from 'redux';

import reducerUsuario from './user';
import reducerGastos from './wallet';

const rootReducer = combineReducers({
  wallet: reducerGastos,
  user: reducerUsuario,
});

export default rootReducer;
