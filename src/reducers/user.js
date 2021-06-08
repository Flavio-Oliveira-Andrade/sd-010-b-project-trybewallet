// Esse reducer será responsável por tratar as informações da pessoa usuária
const initialState = {};

function user(state = initialState, action) {
  switch (action.type) {
  case 'LOGIN':
    return action.email;
  default:
    return state;
  }
}

export default user;
