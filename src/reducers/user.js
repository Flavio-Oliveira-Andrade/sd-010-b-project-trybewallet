import { LOGIN_USER } from '../actions';

const INITIAL_STATE = {
  user: {
    email: '',
  },
};
export default function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case LOGIN_USER: {
    return {
      ...state,
      email: action.payload.email,
    };
  }
  default:
    return state;
  }
}
