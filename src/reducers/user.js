import { ADD_USER } from '../actions';

const INITIAL_STATE = {
  user: {
    email: '',
  },
};

function user(state = INITIAL_STATE, action) {
  switch (action.type) {
  case ADD_USER:
    return {
      ...state,
      user: { email: action.payload },
    };
  default:
    return state;
  }
}

export default user;
