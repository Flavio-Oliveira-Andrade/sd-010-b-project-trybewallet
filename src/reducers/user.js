const initialState = {
  email: '',
};

function userLogin(state = initialState, action) {
  switch (action.type) {
  case 'LOGIN_USER':
    return {
      ...state,
      email: action.email,
    };
  default:
    return state;
  }
}

export default userLogin;
