// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_SATE = {
  currencies: {},
  expenses: [],
};

function wallet(state = INITIAL_SATE, action) {
  switch (action.type) {
  case 'NEW_EXPENSE':
    return {
      ...state,
      expenses: [...state.expenses, action.state],
    };
  case 'RECEIVE_CURRENCIES':
    return {
      ...state,
      currencies: action.state,
    };
  case 'REMOVE_EXPENSE':
    return {
      ...state,
      expenses: state.expenses.filter((expense) => `${expense.id}`
      !== `${action.state.id}`),
    };
  default:
    return state;
  }
}

export default wallet;
