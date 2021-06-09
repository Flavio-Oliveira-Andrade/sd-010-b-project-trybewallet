// Esse reducer será responsável por tratar as informações da pessoa usuária

import { USERLOGIN } from '../actions';

const initialState = {
  email: '',
  password: '',

};

export default (state = initialState, { type, payload }) => {
  switch (type) {
  case USERLOGIN:
    return {
      email: payload.email,
      password: payload.password,
    };
  default:
    return state;
  }
};
