// Esse reducer será responsável por tratar as informações da pessoa usuária
const initialState = {
  email: '',
};

function user(state = initialState, action) {
  switch (action.type) {
  case 'ADD_USER':
    return {
      ...state.user,
      email: action.email,
    };
  default:
    return state;
  }
}

export default user;