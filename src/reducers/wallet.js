const INITIAL_STATE = { currencies: [], expenses: [] };

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'UPDATE_CURRENCIES':
    return { ...state, currencies: action.data };
  case 'ADD_EXPENSE':
    return { ...state,
      expenses: [...state.expenses, action.data] };
  default:
    return state;
  }
};

export default wallet;
