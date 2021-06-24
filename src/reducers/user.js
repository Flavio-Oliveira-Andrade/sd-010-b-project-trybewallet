// Esse reducer será responsável por tratar as informações da pessoa usuária
import { SAVE_MAIL } from '../actions';

const INITIAL_STATE = {
  email: '',
};

export default function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case SAVE_MAIL:
    return {
      ...state,
      email: action.email,
    };
  default:
    return state;
  }
}
