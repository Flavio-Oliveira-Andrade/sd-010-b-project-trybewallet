// Esse reducer será responsável por tratar as informações da pessoa usuária
import { VALID_EMAIL } from '../actions';

const initialState = {
  email: '',
};

const user = (state = initialState, action) => {
  switch (action.type) {
  case VALID_EMAIL:
    return { ...state.user, email: action.payload };
  default:
    return state;
  }
};

export default user;
