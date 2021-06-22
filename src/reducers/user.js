import { LOGIN_USER } from '../actions';

const initialState = {
  email: '',
};

const loginReducer = (state = initialState, action) => {
  const { type, email } = action;
  switch (type) {
  case LOGIN_USER:
    return { email };
  default:
    return state;
  }
};

export default loginReducer;
