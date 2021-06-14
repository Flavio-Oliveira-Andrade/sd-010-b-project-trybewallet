// Esse reducer será responsável por tratar as informações da pessoa usuária
const initialState = {
  email: '',
};

function user(state = initialState, action) {
  switch (action.type) {
  case 'addUser':
    return {
      ...state.user,
      email: action.payload.email,
    };
  default:
    return state;
  }
}

export default user;
