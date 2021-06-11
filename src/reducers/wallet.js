const WALLET_STATE = {
  wallet: {
    currencies: [],
    expenses: [],
  },
};

function walletReducer(state = WALLET_STATE, action) {
  switch (action.type) {
  case 'aaa':
    return state;
  default:
    return state;
  }
}

export default walletReducer;
