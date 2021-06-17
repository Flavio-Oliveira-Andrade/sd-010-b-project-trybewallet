const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};
function walletReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'SAVE_EXPENSES':
    return {
      ...state,
      expenses: [...state.expenses, { ...action.expenses, id: state.expenses.length }],
    };
  default:
    return state;
  }
}

export default walletReducer;
