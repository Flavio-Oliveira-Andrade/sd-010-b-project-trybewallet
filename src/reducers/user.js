import { ADD_LOGIN } from '../actions';

// -------------------------------------------------------------------------------------------------
const INITIAL_STATE = {
  email: '',
  password: '',
};
// -------------------------------------------------------------------------------------------------

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ADD_LOGIN: {
    const { payload: { email, password } } = action;
    return {
      ...state,
      email,
      password,
    };
  }
  default:
    return state;
  }
};

export default userReducer;
