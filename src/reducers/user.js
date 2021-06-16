import SUBMIT_EMAIL from '../actions/userActions';

const USER_STATE = {
  email: '',
};

function userReducer(state = USER_STATE, action) {
  switch (action.type) {
  case SUBMIT_EMAIL:
    return {
      ...state,
      email: action.payload.email,
    };
  default:
    return state;
  }
}

export default userReducer;
