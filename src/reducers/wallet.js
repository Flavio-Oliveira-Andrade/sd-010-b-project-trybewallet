const INITIAL_STATE = {
  currencies: [],
  expenses: [{
    id: 0,
    value: 0,
    description: 'Fioravante',
    currency: '',
    method: '',
    tag: '',
    exchangeRates: {},
  }],
};
function walletReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'SAVE_EXPENSES':
    return {
      ...state,
      expenses: state.expenses
        .map((expense) => ({ ...expense, exchangeRates: { ...action.payload } })),
    };
  default:
    return state;
  }
}

export default walletReducer;
