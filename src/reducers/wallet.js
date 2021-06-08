// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_SATE = {
  user: {
    email: '',
  },
  wallet: {
    currencies: [],
    expenses: [],
  },
};

function walletReducer(state = INITIAL_SATE, action) {
  switch (action.type) {
  case 'NEW_EXPENSE':
    return { state: action.state };
  default:
    return state;
  }
}

export default walletReducer;
