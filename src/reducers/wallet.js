const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

function walletReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'algo':
    return state;
  case 'outra coisa':
    return state;
  default:
    return state;
  }
}

export default walletReducer;
