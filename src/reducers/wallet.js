// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_WALLET = {
  wallet: {
    currencies: [],
    expenses: [],
  },
};

function walletReducer(state = INITIAL_WALLET, action) {
  switch (action.type) {
  case 'CARTEIRA':
    break;
  default:
    return state;
  }
}

export default walletReducer;
