import { ADD_USER } from '../actions';

const INITIAL_STATE = {
  payload: {
    email: '',
  },
};

const User = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ADD_USER:
    return {
      ...state,
      email: action.email,
    };

  default:
    return state;
  }
};

export default User;
