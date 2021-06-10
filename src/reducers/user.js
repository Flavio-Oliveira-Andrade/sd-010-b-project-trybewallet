// Esse reducer será responsável por tratar as informações da pessoa usuária
const INITIAL_USER = {
  user: {
    email: '',
    password: '',
  },
};

function userReducer(state = INITIAL_USER, action) {
  switch (action.type) {
  case 'something':
    return state;
  default:
    return state;
  }
}

export default userReducer;
