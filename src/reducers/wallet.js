// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
export const ADD_EXCHANGE = 'ADD_EXCHANGE';
export const ADD_CURRENCY = 'ADD_CURRENCY';
const initialState = {
  currencies: [],
  expenses: [],
};

const wallet = (state = initialState, action) => {
  switch (action.type) {
  case ADD_CURRENCY || ADD_EXCHANGE:
    return {
      ...state,
      ...action.payload,
    };

  case 'ADD_EXPENSE':
    return {
      ...state,
      expenses: [...state.expenses, action.payload],
    };

  default:
    return state;
  }
};

export default wallet;
