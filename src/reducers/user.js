import SUBMIT_EMAIL from '../actions/index';

const USER_STATE = {
  user: {
    email: '',
  },
};

function userReducer(state = USER_STATE, action) {
  switch (action.type) {
  case SUBMIT_EMAIL:
    return {
      email: action.payload.email,
    };
  default:
    return state;
  }
}

export default userReducer;
