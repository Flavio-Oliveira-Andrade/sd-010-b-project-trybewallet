const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};
function requestApi(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'GET_API':
    return {
      ...state,
      currencies: action.currencies,
    };

  case 'ADD_EXPENSE':
    return { ...state,
      expenses: [...state.expenses, action.expense],
    };
  default:
    return state;
  }
}

export default requestApi;
