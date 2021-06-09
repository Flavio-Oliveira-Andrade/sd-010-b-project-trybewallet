import { LOGIN } from '../actions';

const initialState = { email: '' };

function user(state = initialState, actions) {
  switch (actions.type) {
  case LOGIN:
    return actions.email;
  default:
    return state;
  }
}

export default user;
