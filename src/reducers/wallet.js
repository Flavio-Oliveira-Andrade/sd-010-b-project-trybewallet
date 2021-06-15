const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};
function walletReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'SAVE_EXPENSES':
    return {
      ...state,
      expense: action.expense,
    };
  case 'SAVE_REQUEST':
    return {
      ...state,
      expenses: [{ ...state.expense, exchangeRates: action.response }],
    };
  default:
    return state;
  }
}

export default walletReducer;
