// Esse reducer será responsável por tratar as informações da pessoa usuária
import { EMAIL_CHANGE, PASSWORD_CHANGE } from '../actions/index';

const initialState = {
  email: '',
  password: '',
  disabled: true,
};

function userReducer(state = initialState, action) {
  switch (action.type) {
  case EMAIL_CHANGE:
    return {
      ...state,
      email: action.payload,
    };
  case PASSWORD_CHANGE:
    return {
      ...state,
      password: action.payload,
    };
  default:
    return state;
  }
}

export default userReducer;
