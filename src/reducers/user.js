import { NEW_USER } from '../actions';

// Esse reducer será responsável por tratar as informações da pessoa usuária
const INITIAL_STATE = {
  email: '',
};

function user(state = INITIAL_STATE, action) {
  switch (action.type) {
  case NEW_USER:
    return {
      ...state,
      email: action.payload,
    };
  default:
    return state;
  }
}

export default user;
