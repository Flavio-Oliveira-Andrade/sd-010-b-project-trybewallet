const INITIAL_STATE = { expenses: [] };

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'ADD_EXPENSE':
    return { ...state,
      expenses: [...state.expenses, action.data] };
  default:
    return state;
  }
};

export default wallet;
