// Esse reducer será responsável por tratar as informações da pessoa usuária

import { LOGIN_SUBMIT } from '../actions/index';

const INITIAL_STATE = {
  email: '',
};

function user(state = INITIAL_STATE, action) {
  switch (action.type) {
  case LOGIN_SUBMIT:
    return { ...state, email: action.email };
  default:
    return state;
  }
}

export default user;
