// Esse reducer será responsável por tratar as informações da pessoa usuária
import { EMAIL_CHANGE } from '../actions/index';

const initialState = {
  email: 0,
};

function userReducer(state = initialState, action) {
  switch (action.type) {
  case EMAIL_CHANGE:
    return {
      ...state,
      email: action.payload,
    };
  default:
    return state;
  }
}

export default userReducer;
