const INTIAL_LOGIN = {
  email: '',
};

function userReducer(state = INTIAL_LOGIN, action) {
  switch (action.type) {
  case 'EMAIL_LOGIN':
    return {
      ...state,
      email: action.email,
    };
  default:
    return state;
  }
}

export default userReducer;
