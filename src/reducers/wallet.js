// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

const initialState = {
  currencies: [],
  expenses: [{
    id: 1,
  }],
};

function walletReducer(state = initialState, action) {
  switch (action.type) {
  case 'REGISTER_EXPENSE':
    return {
      ...state, expenses: [...state.expenses, action.data],
    };
  default:
    return state;
  }
}

export default walletReducer;
