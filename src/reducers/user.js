import { ADD_USER } from '../actions';

const INITIAL_STATE = {
  email: '',
};

function user(state = INITIAL_STATE, action) {
  switch (action.type) {
  case ADD_USER:
    return {
      ...state,
      email: [
        ...state.email,
        action.payload,
      ],
    };
  default:
    return state;
  }
}

export default user;
