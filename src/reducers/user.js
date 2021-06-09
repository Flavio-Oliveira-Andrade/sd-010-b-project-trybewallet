// Esse reducer será responsável por tratar as informações da pessoa usuária
const initialState = {
  email: '',
};

function userReducer(state = initialState, action) {
  switch (action.type) {
  case 'USER_LOGIN':
    return { email: action.state };
  default:
    return state;
  }
}

export default userReducer;
