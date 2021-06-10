// Esse reducer será responsável por tratar as informações da pessoa usuária
const INITIAL_USER_STATE = {
  email: '',
};

const user = (state = INITIAL_USER_STATE, action) => {
  switch (action.type) {
  case 'EMAIL':
    return {
      ...state,
      email: action.state,
    };
  default:
    return state;
  }
};

export default user;
