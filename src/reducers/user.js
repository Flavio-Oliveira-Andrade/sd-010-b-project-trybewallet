const initialState = {
  email: '',
  password: '',
  redirect: false,
};

function userReducer(state = initialState, { type, payload }) {
  switch (type) {
  case 'LOGIN':
    return {
      ...state,
      email: payload.email,
      password: payload.password,
      redirect: true,
    };
  default:
    return state;
  }
}

export default userReducer;
