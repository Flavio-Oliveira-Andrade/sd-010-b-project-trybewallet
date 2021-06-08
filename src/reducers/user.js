// Esse reducer será responsável por tratar as informações da pessoa usuária
const INITIAL_USER_STATE = {
  user: {
    email: '',
  },
  wallet: {
    currencies: [],
    expenses: [],
  },
};

const user = (state = INITIAL_USER_STATE, action) => {
  switch (action.type) {
  case 'SWITCH':
    return {
      ...state,
      valor: 'valor',
    };
  default:
    return state;
  }
};

export default user;
