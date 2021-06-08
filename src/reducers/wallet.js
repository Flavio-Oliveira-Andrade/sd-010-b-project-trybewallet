const INITIAL_STATE = {
  wallet: {
    currencies: [],
    expenses: [],
  },
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'ADD_MOEDAS':
    return {
      ...state,
      currencies: [...action.payload.currencies],
    };
  case 'ERROR':
    return state;
  default:
    return state;
  }
};

export default wallet;
