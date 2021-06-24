// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const initialState = {
  currencies: [],
  expenses: [],
};

function wallet(state = initialState, action) {
  switch (action.type) {
  case 'RECEBER_MOEDAS':
    return {
      ...state,
      currencies: Object.keys(action.currencies),
    };
  case 'ADICIONAR_DESPESAS':
    return {
      ...state,
      expenses: [...state.expenses, action.expenses],
    };
  case 'DELL_EXPENSE':
    return {
      ...state,
      expenses: action.payload,
    };
  default:
    return state;
  }
}

export default wallet;
