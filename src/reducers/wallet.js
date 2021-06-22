// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const initialState = {
  currencies: [],
  expenses: [],
};

function wallet(state = initialState, action) {
  switch (action.type) {
  case 'RECEIVE_CURRENCIES':
    return {
      ...state,
      currencies: Object.keys(action.payload.currencies),
    };
  case 'ADD_EXPENSES':
    return {
      ...state,
      expenses: [...state.expenses, action.payload.expenses],
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
