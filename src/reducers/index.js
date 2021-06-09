// import user from './user';
// import wallet from './wallet';

// Configure os seus reducers.
// ATENÇÃO: você obrigatoriamente tem que utilizar as chaves "user" e "wallet" no seu estado global
import { combineReducers } from 'redux';
import reducerUser from './user';

const rootReducers = combineReducers({
  user: reducerUser,
});

export default rootReducers;
