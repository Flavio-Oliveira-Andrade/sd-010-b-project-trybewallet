// Esse reducer será responsável por tratar as informações da pessoa usuária

import { LOGIN } from '../actions';

const INICIAL_STATE = {};

const user = (state = INICIAL_STATE, action) => {
  switch (action.type) {
  case LOGIN:
    return action.value;

  default:
    return state;
  }
};

export default user;
