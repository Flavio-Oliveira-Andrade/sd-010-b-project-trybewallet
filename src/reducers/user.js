import { LOGIN_USER, PASSWORD_LOGIN } from '../actions/loginActions';

const INITIAL_USER_STATE = { email: '', password: '' };

const user = (state = INITIAL_USER_STATE, action) => {
  switch (action.type) {
  case LOGIN_USER:
    return ({
      ...state,
      email: action.payload,
    });
  case PASSWORD_LOGIN:
    return ({
      ...state,
      password: action.payload,
    });

  default:
    return state;
  }
};

export default user;
