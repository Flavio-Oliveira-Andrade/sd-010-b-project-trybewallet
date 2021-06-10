// Esse reducer será responsável por tratar as informações da pessoa usuária
const INITIAL_USER = {
  user: {
    email: '',
    password: '',
  },
};

function userReducer(state = INITIAL_USER, action) {
  switch (action.type) {
  case 'INPUT_EMAIL':
    return {
      ...state,
      user: {
        ...state.user,
        email: action.payload.email,
      },
    };
  case 'INPUT_PASSWORD':
    return {
      ...state,
      user: {
        ...state.user,
        password: action.payload.password,
      },
    };
  default:
    return state;
  }
}

export default userReducer;
