import { LOGIN } from '../actions';

const initialState = {
  user: {
    email: '',
  },
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
  case LOGIN:
    return {
      // ...state,
      email: payload.email,
      password: payload.password,
    };

  default:
    return state;
  }
};
