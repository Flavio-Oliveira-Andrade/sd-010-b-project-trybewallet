import { EMAIL_CHECK, PASSWORD_CHECK } from '../actions/loginActions';

// Esse reducer será responsável por tratar as informações da pessoa usuária
const INITIAL_USER_STATE = { email: '', password: '' };

const user = (state = INITIAL_USER_STATE, action) => {
  switch (action.type) {
  case EMAIL_CHECK:
    return ({
      ...state,
      email: action.payload,
    });
  case PASSWORD_CHECK:
    return ({
      ...state,
      password: action.payload,
    });

  default:
    return state;
  }
};

export default user;
