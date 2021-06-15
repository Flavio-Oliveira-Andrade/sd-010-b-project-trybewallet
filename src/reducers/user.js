const inicialstate = {
  email: '',
  password: '',
};

function userReducer(state = inicialstate, action) {
  switch (action.type) {
  case 'Login':
    return { ...state, email: action.email, password: action.password,
    };
  default:
    return state;
  }
}
export default userReducer;
