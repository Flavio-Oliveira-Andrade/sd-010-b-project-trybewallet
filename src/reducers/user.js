import { USER_DATA } from '../actions/index';

const INITIAL_STATE = {
  email: '',
  password: '',
};

function user(state = INITIAL_STATE, action) {
  switch (action.type) {
  case USER_DATA:
    return {
      ...state,
      email: action.email,
      password: action.password,
    };
  default:
    return state;
  }
}

export default user;
