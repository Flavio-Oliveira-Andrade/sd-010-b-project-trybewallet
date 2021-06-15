const INITIAL_STATE = {
  wallet: {
    currencies: [],
    isFetching: false,
    expenses: [],
  },
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'WALLET_ACTION_ADD_EXPENSE':
    return {
      ...state,
      expenses: [...state.wallet.expenses, action.payload.expense],
    };
  case 'GET_CURRENCIES_SUCCESS':
    return {
      ...state,
      currencies: action.payload.currenciesData,
      isFetching: action.payload.isFetching,
    };
  case 'GET_CURRENCIES_ERROR':
    return {
      ...state,
      currencies: action.payload.error,
      isFetching: action.payload.isFetching,
    };
  default:
    return state;
  }
}

export default wallet;
