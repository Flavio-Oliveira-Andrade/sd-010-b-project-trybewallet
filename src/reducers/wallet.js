// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const WALLET_INITIAL_STATE = {
  wallet: {
    currencies: [],
    expenses: [],
  },
};

function wallet(state = WALLET_INITIAL_STATE, action) {
  switch (action.type) {
  case 'USER_WALLET':
    return { state: action.state };

  default:
    return state;
  }
}

export default wallet;
