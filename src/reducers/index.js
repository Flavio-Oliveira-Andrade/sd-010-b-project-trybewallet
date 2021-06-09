// esse é o index da pasta Reducers
import { combineReducers } from 'redux';
import user from './user';
import wallet from './wallet';
// padrão criar esse combine
const rootReducer = combineReducers({
  user, // veja que tem no import
  wallet,
}); // dentro deste combineReducers eu coloquei 2 dentro. Aí tenho que usar o switch e o case nos arquivos destes 2. Aí importei esse 2 aqui,

export default rootReducer;
