// Esse reducer será responsável por tratar as informações da pessoa usuária
import { ADD_USER } from '../actions';

const initialState = {
  email: '',
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
  case ADD_USER:
    return { email: payload };

  default:
    return state;
  }
};
