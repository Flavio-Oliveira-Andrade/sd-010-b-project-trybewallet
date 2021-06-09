const INITIAL_STATE = {
  wallet: {
    currencies: [],
    expenses: [],
    isFetching: false,
  },
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'REQUEST':
    return {
      ...state,
      wallet: { ...state.wallet, isFetching: action.payload.isFetching },
    };
  case 'ADD_MOEDAS':
    return {
      ...state,
      wallet: { ...state.wallet,
        currencies: [action.payload.currencies],
        isFetching: action.payload.isFetching,
      },
    };
  case 'ERROR':
    return state;
  default:
    return state;
  }
};

export default wallet;
