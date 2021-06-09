// Esse reducer será responsável por tratar as informações da pessoa usuária

const initialState = {
  user: {
    email: '',
  },
};

export default function user(state = initialState, action) {
  switch (action.type) {
  case 'LOGIN':
    return {
      ...state,
      email: action.value,
    };
  default:
    return state;
  }
}
