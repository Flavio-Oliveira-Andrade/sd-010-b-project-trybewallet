// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_WALLET = {
  currencies: [],
  expenses: [],
  isFetching: true,
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
  default:
    return state;
  }
}

export default wallet;
