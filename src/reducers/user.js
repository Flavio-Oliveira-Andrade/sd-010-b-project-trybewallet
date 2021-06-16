const inicialstate = {
  email: '',
  password: '',
  redirect: false,
};

function userReducer(state = inicialstate, action) {
  switch (action.type) {
  case 'Login':
    return { ...state, email: action.email, password: action.password, redirect: true,
    };
  default:
    return state;
  }
}
export default userReducer;
