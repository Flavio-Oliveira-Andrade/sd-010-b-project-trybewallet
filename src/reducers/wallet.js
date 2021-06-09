// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

const initialState = {
  currencies: [],
  expenses: [],
};

function walletReducer(state = initialState, action) {
  switch (action.type) {
  case 'value':
    break;
  default:
    return state;
  }
}

export default walletReducer;
