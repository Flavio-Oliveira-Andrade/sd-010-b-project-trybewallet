// Esse reducer será responsável por tratar as informações da pessoa usuária
const INITIAL_STATE = {
  email: '',
  password: '',
  isDisabled: true,
};

function user(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'EMAIL':
    return { ...state, email: action.email };
  case 'PASSWORD':
    return { ...state, password: action.password };
  case 'ISDISABLED':
    return { ...state, isDisabled: action.isDisabled };
  default:
    return state;
  }
}

export default user;
