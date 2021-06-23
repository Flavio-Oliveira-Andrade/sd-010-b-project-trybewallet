import { EMAIL_CHECK, PASSWORD_CHECK } from '../actions/index';

// Esse reducer será responsável por tratar as informações da pessoa usuária
const INITIAL_STATE = { email: '', password: '' };

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case EMAIL_CHECK:
    console.log(action);
    return ({
      ...state,
      email: action.payload,
    });
  case PASSWORD_CHECK:
    console.log(action);
    return ({
      ...state,
      password: action.payload,
    });

  default:
    return state;
  }
};

export default user;
