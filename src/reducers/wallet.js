const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  errors: '',
};

function walletReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'CURRENCY':
    return {
      ...state,
      currencies: [
        Object.keys(action.payload).filter((entry) => entry !== 'USDT'),
        action.payload,
      ],
    };
  case 'ADD_EXPENSE':
    return {
      ...state,
      expenses: [...state.expenses, action.payload],
    };
  case 'REMOVE_EXPENSIVE':
    return {
      ...state,
      expenses: [...state.expenses.filter((entry) => (
        entry.id !== parseInt(action.payload, 10)))],
    };
  case 'FAIL':
    return {
      ...state,
      error: action.payload,
    };
  default:
    return state;
  }
}

export default walletReducer;
