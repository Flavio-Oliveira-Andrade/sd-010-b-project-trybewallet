// Esse reducer será responsável por tratar as informações da pessoa usuária
const initialState = {};

function user(state = initialState, action) {
  switch (action.type) {
  case 'LOGIN':
    return action;
  default:
    return state;
  }
}

export default user;
