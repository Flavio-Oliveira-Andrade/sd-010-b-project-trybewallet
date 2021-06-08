// Esse reducer será responsável por tratar as informações da pessoa usuária

import { LOGIN_SUCCESS } from '../actions/index';

const INITIAL_STATE = {
  user: {
    email: '',
  },
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case (LOGIN_SUCCESS):
    return (
      { ...state, email: action.email }
    );
  default:
    return state;
  }
};

export default user;
