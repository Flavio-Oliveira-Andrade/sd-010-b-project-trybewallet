import { EMAIL_USER } from '../actions';

const userDefaul = {
  email: '',
};
function userReducer(state = userDefaul, action) {
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
