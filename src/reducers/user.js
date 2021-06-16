import { CHECK_EMAIL } from '../actions';

const INITIAL_STATE = {
  email: 'error',
};

function user(state = INITIAL_STATE, { type, email }) {
  switch (type) {
  case CHECK_EMAIL:
    return {
      ...state,
      email,
    };
  default:
    return state;
  }
}

export default user;
