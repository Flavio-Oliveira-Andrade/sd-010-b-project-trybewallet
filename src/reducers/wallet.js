// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

const initialState = {
  currencies: [],
  expenses: [],
};

function wallet(state = initialState, action) {
  switch (action.type) {
  case 'RECEIVE_CURRENCY':
    return {
      ...state,
      currencies: action.currencies,
    };
  default:
    return state;
  }
}

export default wallet;
