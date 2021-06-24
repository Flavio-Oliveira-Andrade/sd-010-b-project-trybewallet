// Esse reducer será responsável por tratar as informações da pessoa usuária
const INITIAL_USER = {
  email: '',
  // password: '',
};

function user(state = INITIAL_USER, action) {
  switch (action.type) {
  case 'EMAIL':
    return { ...state, email: action.email };
  // case 'PASSWORD':
  //   return { ...state, password: action.password };
  default:
    return state;
  }
}

export default user;
