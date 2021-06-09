const INITIAL_STATE = {
  user: {
    email: '',
  },
};
// Esse reducer será responsável por tratar as informações da pessoa usuária
export default function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'LOGIN':
    return {
      ...state,
      email: action.payload.email,
    };
  default:
    return state;
  }
}
