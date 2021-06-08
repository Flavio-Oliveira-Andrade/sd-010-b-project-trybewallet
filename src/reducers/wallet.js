const userDefaul = {
  currencies: [],
  expenses: [],
};
function walletReducer(state = userDefaul, action) {
  switch (action.type) {
  case '':
    return {};
  default:
    return state;
  }
}

export default walletReducer;
