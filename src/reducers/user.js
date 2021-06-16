import { LOGIN_USER } from '../actions';

const INITIAL_LOGIN = { email: '' };

export default (state = INITIAL_LOGIN, action) => {
  switch (action.type) {
  case LOGIN_USER:
    return { ...state, email: action.email };
  default:
    return state;
  }
};
