// Esse reducer será responsável por tratar as informações da pessoa usuária
const INITIAL_STATE = {
  user: {
    email: '',
    password: '',
    auth: false,
  },
};
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case LOGIN:
    state = action.user;
    return state;
  case LOGOUT:
    state = { ...state, action };
    return state;
  default:
    return state;
  }
}
export default userReducer;
