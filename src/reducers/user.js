const initialState = {
  email: '',
  password: '',
  redirect: false,
};

function userReducer(state = initialState, action) {
  switch (action.type) {
  case 'LOGIN':
    return {
      ...state,
      email: action.payload.email,
      password: action.payload.password,
      redirect: true,
    };
  default:
    return state;
  }
}

export default userReducer;
