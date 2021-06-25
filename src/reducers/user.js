import { EMAIL_USER } from '../actions';

const initialState = {
  email: '',
};

function userReducer(state = initialState, action) {
  switch (action.type) {
  case EMAIL_USER:
    return {
      ...state,
      email: action.email,
    };
  default:
    return state;
  }
}

export default userReducer;
