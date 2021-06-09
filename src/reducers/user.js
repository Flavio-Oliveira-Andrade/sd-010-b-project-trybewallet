// Esse reducer será responsável por tratar as informações da pessoa usuária
const INITIAL_USER = {
  user: {
    email: 'ola',
    password: '',
  },
};

function userReducer(state = INITIAL_USER, action) {
  switch (action.type) {
  case 'LOGAR':
    break;
  default:
    return state;
  }
}

export default userReducer;
