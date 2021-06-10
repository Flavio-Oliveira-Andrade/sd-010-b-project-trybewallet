// Esse reducer será responsável por tratar as informações da pessoa usuária
const INITIAL_USER = {
  email: '',
  password: '',
};

function user(state = INITIAL_USER, action) {
  switch (action.type) {
  case 'INPUT_EMAIL':
    return {
      ...state,
      email: action.payload.email,
    };
  case 'INPUT_PASSWORD':
    return {
      ...state,
      password: action.payload.password,
    };
  default:
    return state;
  }
}

export default user;
