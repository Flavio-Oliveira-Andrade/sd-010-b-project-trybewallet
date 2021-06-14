// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const initialState = {
  wallet: {
    currencies: [],
    expenses: [],
  },
};

const wallet = (state = initialState, action) => {
  switch (action.type) {
  case 'ADD_CURRENCIES':
    return {
      ...state,
      currencies: [action.values],
    };

  default:
    return state;
  }
};

export default wallet;
