// Esse reducer será responsável por tratar as informações da pessoa usuária
import { SAVE_LOGIN_EMAIL } from '../actions';

const INITIAL_USER_STATE = { email: '' };

const userEmail = (state = INITIAL_USER_STATE, action) => {
  switch (action.type) {
  case SAVE_LOGIN_EMAIL:
    return { ...state, email: action.email };
  default:
    return state;
  }
};

export default userEmail;
