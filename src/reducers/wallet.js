const WALLET_STATE = {
  currencies: [],
  expenses: [],
  curr: 'BRL',
  totalExpense: 0,
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
