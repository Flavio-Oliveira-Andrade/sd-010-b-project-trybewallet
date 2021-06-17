const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  total: 0,
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'WALLET':
    return state;
  default:
    return state;
  }
};

export default wallet;
