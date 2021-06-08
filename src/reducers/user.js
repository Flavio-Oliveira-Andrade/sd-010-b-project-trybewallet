// Esse reducer será responsável por tratar as informações da pessoa usuária
import { SET_EMAIL } from '../actions';

const INITIAL_USER = {
  email: '',
};

export default function user(state = INITIAL_USER, action) {
  switch (action.type) {
  case SET_EMAIL:
    return { ...state, email: action.email };
  default:
    return state;
  }
}
