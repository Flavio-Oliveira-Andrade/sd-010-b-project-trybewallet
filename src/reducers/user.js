import { LOGIN } from '../actions';

const INITIAL_STATE = {
  user: {
    email: '',
  },
};

export default function user(state = INITIAL_STATE, action) {
  switch (action.type) {
  case LOGIN:
    return {
      ...state,
      user: { email: action.payload.userName,
      },
    };
  default:
    return state;
  }
}
