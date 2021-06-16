import { LOGIN_INFO } from '../actions';

const INITIAL_STATE = {
  user: {
    email: '',
  },
};

function user(state = INITIAL_STATE, action) {
  switch (action.type) {
  case LOGIN_INFO:
    return {
      ...state,
      user: {
        email: action.payload.userEmail,
      },
    };
  default:
    return state;
  }
}

export default user;
