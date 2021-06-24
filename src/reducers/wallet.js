// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  expenseForm: {
    id: 0,
    value: '',
    description: '',
    currency: 'USD',
    method: 'Dinheiro',
    tag: 'Alimentação',
    exchangeRates: {},
  },
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'CURRENCIES':
    return { ...state, currencies: action.currencies };
  case 'EXPENSES':
    return {
      ...state,
      expenses: [...state.expenses, action.expenses],
      expenseForm: { ...state.expenseForm, id: action.ID },
    };
  case 'EXPENSEFORM':
    return { ...state, expenseForm: action.expenseForm };
  case 'DELETE':
    return { ...state, expenses: action.newExpenses };
  default:
    return state;
  }
}

export default wallet;
