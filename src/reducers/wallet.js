const INITIAL_STATE = {
  id: 0,
  expenses: [],
  total: 0,
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'add':
    return {
      ...state,
      expenses: [...state.expenses, action.state.expenses],
      id: state.id,
      total: state.total + action.state.total,
    };
  default:
    return state;
  }
}

export default wallet;
