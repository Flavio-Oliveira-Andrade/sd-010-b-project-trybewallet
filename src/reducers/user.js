// Esse reducer será responsável por tratar as informações da pessoa usuária
import { USER_INFO } from '../actions';

const INITIAL_STATE = {
  user: {
    email: '',
  },
};

const ingredientsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case USER_INFO:
    return { ingredients: action.ingredients };
  default:
    return state;
  }
};

export default ingredientsReducer;
