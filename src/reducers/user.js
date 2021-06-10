// Esse reducer será responsável por tratar as informações da pessoa usuária
import { LOGIN } from '../actions/index';

const INITIAL_STATE = {
  email: '',
};

function userReducer(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
  case LOGIN:
    return {
      ...state,
      email: payload.email,
      teste: 'batata-doce',
    };

  default:
    return state;
  }
}

export default userReducer;
