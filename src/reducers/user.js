// Esse reducer será responsável por tratar as informações da pessoa usuári
const INITIAL_STATE = {
  user: {
    email: '',
  },
  wallet: {
    currencies: [],
    expenses: [],
  },
};

function user(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'USER_LOGIN':
    return {
      ...state,
      user: {
        email: action.email,
      },
    };
  default:
    return state;
  }
}

export default user;
