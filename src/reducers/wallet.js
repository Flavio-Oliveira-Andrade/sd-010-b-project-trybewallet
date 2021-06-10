// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_WALLET = {
  wallet: {
    currencies: [],
    expenses: [],
  },
};

function wallet(state = INITIAL_WALLET, action) {
  switch (action.type) {
  case 'something':
    return state;
  default:
    return state;
  }
}

export default wallet;
