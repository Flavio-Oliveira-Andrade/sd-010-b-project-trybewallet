// esse é o index da pasta Reducers
import { combineReducers } from 'redux';
import user from './user';
import wallet from './wallet';
// padrão criar esse combine
const rootReducer = combineReducers({
  user, // veja que tem no import
  wallet,
});

export default rootReducer;
