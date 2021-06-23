// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'CURRENCIES_VALUES':
    return {
      ...state,
      currencies: action.state,
    };
  case 'EXPENSES_VALUES':
    return {
      ...state,
      expenses: [...state.expenses, action.state],
    };
  default:
    return state;
  }
}

export default wallet;
