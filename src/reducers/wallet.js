const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};
// Codigo ajustado com a ajuda do Jonathan Souza
function walletReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'SAVE_EXPENSES':
    return {
      ...state,
      expenses: [...state.expenses, { ...action.expenses, id: state.expenses.length }],
    };
  case 'DELETE_EXPENSE':
    return {
      ...state,
      expenses: state.expenses.filter((item) => item.id !== action.expenses),
    };
  default:
    return state;
  }
}
// Reducer de delete feito com a ajuda do Gabriel Miranda.
export default walletReducer;
