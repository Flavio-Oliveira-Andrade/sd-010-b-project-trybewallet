const INITIAL_STATE = {
  expenses: [],
  id: 0,
  total: 0,
};

function wallet(state = INITIAL_STATE, action) {
  const id = state.expenses.length;
  console.log(state.total)
  switch (action.type) {
  case 'add':
    return {
      ...state,
      expenses: [...state.expenses, action.state],
      id,
    };
  case 'allAmount':
    return {
      ...state,
      total: state.total + action.state,
    };
  default:
    return state;
  }
}

export default wallet;
