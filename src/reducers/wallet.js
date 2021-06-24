// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const initialState = {
  currencies: [],
  expenses: [],
};

function walletReducer(state = initialState, action) {
  switch (action.type) {
  case 'ADD_DESPESA':
    return {
      ...state,
      expenses: [...state.expenses, action.chaveDaAction],
    };
  case 'ADD_CURRENCIES':
    return {
      ...state,
      currencies: action.currencies,
    };
  case 'REMOVE_DESPESA':
    return {
      ...state,
      expenses: state.expenses.filter((linha) => linha !== action.despesa),
    };
  default:
    return state;
  }
}

export default walletReducer;
