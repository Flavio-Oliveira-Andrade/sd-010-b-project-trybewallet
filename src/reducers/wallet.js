const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'TESTE':
    break;
  default:
    return state;
  }
};

export default walletReducer;
