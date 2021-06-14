// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const initialState = {
  currencies: [],
  expenses: [],
};

function wallet(state = initialState, action) {
  switch (action.type) {
  case 'receiveCurrencies':
    return {
      ...state,
      currencies: Object.keys(action.payload.currencies),
    };
  default:
    return state;
  }
}

export default wallet;
