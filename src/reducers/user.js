// Esse reducer será responsável por tratar as informações da pessoa usuária
import { LOGIN } from '../actions/userAction';

const initialState = {
  email: '',
};

function userReducer(state = initialState, action) {
  switch (action.type) {
  case LOGIN:
    return {
      ...state,
      email: action.payload,
    };
  default:
    return state;
  }
}

export default userReducer;
