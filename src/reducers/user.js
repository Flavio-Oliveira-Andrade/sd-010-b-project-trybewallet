// Esse reducer será responsável por tratar as informações da pessoa usuária
const INITIAL_USER_STATE = {
  user: {
    email: '',
  },
};

const user = (state = INITIAL_USER_STATE, action) => {
  switch (action.type) {
  case 'SAVE_EMAIL_LOGIN':
    return {
      ...state,
      user: { email: action.payload },
    };
  default:
    return state;
  }
};

export default user;
