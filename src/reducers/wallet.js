const INITIAL_STATE = { currencies: [], expenses: [] };

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'UPDATE_CURRENCIES':
    return { ...state, currencies: action.data };
  case 'ADD_EXPENSE':
    return { ...state,
      expenses: [...state.expenses, action.data] };
  case 'DELETE_EXPENSE':
    return { ...state,
      expenses: [...state.expenses.filter((expense) => action.data !== expense.id)] };
  default:
    return state;
  }
};

export default wallet;
