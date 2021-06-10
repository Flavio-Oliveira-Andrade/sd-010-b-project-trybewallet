// Esse reducer será responsável por tratar as informações da pessoa usuária
import { ADD_EMAIL } from '../actions/types';

const initialState = {
  user: {
    email: '',
  },
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
  case ADD_EMAIL:
    return {
      ...state,
      email: action.payload.email,
    };
  default:
    return state;
  }
}
