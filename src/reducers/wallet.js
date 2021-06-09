// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_SATE = {
  currencies: [],
  expenses: [],
};

function wallet(state = INITIAL_SATE, action) {
  switch (action.type) {
  case 'NEW_EXPENSE':
    return {
      ...state,
      expenses: [...state.expenses, action.state],
    };
  default:
    return state;
  }
}

export default wallet;
