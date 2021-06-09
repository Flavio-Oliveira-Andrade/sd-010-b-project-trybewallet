import { STORE_EMAIL } from '../actions';

const INITIAL_STATE = {
  user: {
    email: '',
  },
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case STORE_EMAIL:
    return { user: { ...state.user, email: action.payload.email } };
  default:
    return state;
  }
};

export default userReducer;
