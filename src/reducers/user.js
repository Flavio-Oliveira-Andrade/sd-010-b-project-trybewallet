// Esse reducer será responsável por tratar as informações da pessoa usuária
import { EMAIL } from '../actions';
// Estado GLobal
const INITIAL_STATE_USER = {
  email: '',
};

function user(state = INITIAL_STATE_USER, action) {
  switch (action.type) {
  case EMAIL:
    return { ...state, email: action.payload }; // recebendo email

  default:
    return state;
  }
}

export default user;
