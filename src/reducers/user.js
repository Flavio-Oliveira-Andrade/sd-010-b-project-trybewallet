// Esse reducer será responsável por tratar as informações da pessoa usuária
const INITIAL_SATE = {
  email: '',
};

function user(state = INITIAL_SATE, action) {
  switch (action.type) {
  case 'USER_LOGIN':
    return {
      ...state,
      email: action.state,
    };
  default:
    return state;
  }
}

export default user;
