import { USER_DATA } from '../actions/index';

const INITIAL_STATE = {};

function user(state = INITIAL_STATE, action) {
  switch (action.type) {
  case USER_DATA:
    return {
      ...state,
      email: action.email,
    };
  default:
    return state;
  }
}

export default user;
