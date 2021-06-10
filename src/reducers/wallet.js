// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const initialState = {
  currencies: [],
  expenses: [],
};

const wallet = (state = initialState, action) => {
  switch (action.type) {
  case 'RECEIVE_API':
    return {
      ...state,
      currencies: action.currency,
    };
  case 'ADD_EXPENSE':
    return {
      ...state,
      expenses: [...state.expenses, action.value],
    };
  default:
    return state;
  }
};

export default wallet;
