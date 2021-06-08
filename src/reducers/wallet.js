// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  user: {
    email: '',
  },
  wallet: {
    currencies: [],
    expenses: [],
  },
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'USER_LOGIN':
    return state;
  default:
    return state;
  }
}

export default wallet;
