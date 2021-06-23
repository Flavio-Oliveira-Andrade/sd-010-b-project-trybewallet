// Esse reducer será responsável por tratar as informações da pessoa usuária
import { SAVE_MAIL } from '../actions';

const INITIAL_STATE = {
  user: {
    email: '',
  },
};

export default function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case SAVE_MAIL:
    return {
      ...state,
      user: {
        email: action.email,
      },
    };
  default:
    return state;
  }
}
