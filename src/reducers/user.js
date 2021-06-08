// Esse reducer será responsável por tratar as informações da pessoa usuária
const initialState = {};

function userReducer(state = initialState, action) {
  switch (action.type) {
  case 'LOGIN':
    return action.value;
  default:
    return state;
  }
}

export default userReducer;
