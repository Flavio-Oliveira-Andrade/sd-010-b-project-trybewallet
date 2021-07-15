// Esse reducer será responsável por tratar as informações da pessoa usuária
import { EMAIL_INPUT, UPDATE_TOTAL } from '../actions';

const initialState = {
  email: '',
  total: 0,
};

const user = (state = initialState, action) => {
  switch (action.type) {
  case EMAIL_INPUT:
    return {
      ...state,
      email: action.payload,
    };
  case UPDATE_TOTAL:
    return {
      ...state,
      total: action.payload,
    };
  default:
    return state;
  }
};

export default user;
