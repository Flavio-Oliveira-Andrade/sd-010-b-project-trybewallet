// Esse reducer será responsável por tratar as informações da pessoa usuária
import { LOGIN } from '../actions';

const initialState = {
  email: 'gustavo@trybe.com',
};

const user = (state = initialState, { type, payload }) => {
  switch (type) {
  case LOGIN:
    return { ...state, email: payload };

  default:
    return state;
  }
};

export default user;
