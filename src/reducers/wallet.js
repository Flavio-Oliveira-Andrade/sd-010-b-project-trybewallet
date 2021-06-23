// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'CURRENCIES':
    return { ...state, currencies: [...state.currencies, action.exchange] };
  case 'EXPENSES':
    return { ...state, expenses: [...state.expenses, action.expenses] };
  default:
    return state;
  }
}

export default wallet;
