import { SET_LOGIN } from '../actions';

const INITIAL_LOGIN = { email: '' };

export default (state = INITIAL_LOGIN, action) => {
  switch (action.type) {
  case SET_LOGIN:
    return { ...state, email: action.email };
  default:
    return state;
  }
};
