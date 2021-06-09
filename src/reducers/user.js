// Esse reducer será responsável por tratar as informações da pessoa usuária
// depois de ter feito muita coisa no login.js e ter feito o dispatch, aí eu venho aqui começar a completar informações.
import { PROPER_EMAIL } from '../actions/index'; // veio do index.js da actions

const initialstate = {
  email: '',
};
const userReducer = (state = initialstate, action) => {
  switch (action.type) {
  case PROPER_EMAIL: // é o que tá na action
    return {
      ...state, email: action.email, // boto o email aqui porque foi o que coloquei logo acima no initialstate.
    }; // depois de email: eu tentei usar ...state.email, action.payload.email  mas não deu certo
  default:
    return state;
  }
};
export default userReducer;
