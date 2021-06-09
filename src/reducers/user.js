// Esse reducer será responsável por tratar as informações da pessoa usuária
const LOGIN = 'LOGIN';
const INITIAL_STATE = {
  email: '',
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case LOGIN:
    return {
      ...state,
      email: action.email,
    };
  default:
    return state;
  }
};

export default user;
// #Passo 04
