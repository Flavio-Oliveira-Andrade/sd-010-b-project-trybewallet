import { SUBMIT_EMAIL } from '../actions';

const INITIAL_STATE = {
  email: '',
};

function user(state = INITIAL_STATE, { type, email }) {
  switch (type) {
  case SUBMIT_EMAIL:
    return { ...state, email };
  default:
    return state;
  }
}

export default user;
