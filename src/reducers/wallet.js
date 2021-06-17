// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_WALLET = {
  currencies: [],
  expenses: [],
  isFetching: true,
  exchangeRates: {},
};

function wallet(state = INITIAL_WALLET, action) {
  switch (action.type) {
  case 'FETCHING_CURRENCIES':
    return {
      ...state,
      isFetching: action.payload.isFetching,
    };
  case 'REQUEST_CURRENCIES':
    return {
      ...state,
      currencies: action.payload.currencies,
      isFetching: action.payload.isFetching,
    };
  case 'ADD_EXPENSE':
    return {
      ...state,
      expenses: [...state.expenses, action.payload.expenses],
    };
  case 'ADD_EXCHANGES':
    return {
      ...state,
      exchangeRates: action.payload.expenses,
    };
  default:
    return state;
  }
}

export default wallet;
