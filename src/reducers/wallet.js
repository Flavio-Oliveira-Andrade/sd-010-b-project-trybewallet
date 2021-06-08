// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const defaultState = {
  user: {
    email: '',
  },
  wallet: {
    currencies: [],
    expenses: [],
  },
};

function walletReducer(state = defaultState, action) {
  switch (action.type) {
  case 'User':
    return state;
  default:
    return state;
  }
}

export default walletReducer;
