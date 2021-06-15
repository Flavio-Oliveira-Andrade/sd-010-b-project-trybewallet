// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const initialState = {
  currencies: [],
  expenses: [],
  actualExchenges: {},
};

const wallet = (state = initialState, action) => {
  switch (action.type) {
  case 'ADD_CURRENCY':
    return {
      ...state,
      ...action.payload,
    };

  case 'ADD_EXPENSE':
    return {
      ...state,
      expenses: [...state.expenses, action.payload],
    };

  case 'ADD_EXCHANGE':
    return {
      ...state,
      ...action.payload,
    };

  default:
    return state;
  }
};

export default wallet;
