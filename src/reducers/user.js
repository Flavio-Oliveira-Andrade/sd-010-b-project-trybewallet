import { SET_USER } from '../actions';

const INITIAL_STATE = {
  email: '',
};

function user(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
  case SET_USER:
    return { ...state, email: payload };
  default:
    return state;
  }
}

export default user;
