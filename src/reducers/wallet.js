// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'CHANGE-CURRENCIES':
    return { ...state, currencies: action.payload.currencies };
  case 'CHANGE-EXPENSES':
    return { ...state, expenses: action.payload.expenses };
  case 'CHANGE-CURR_AND_EXP':
    return { currencies: action.payload.currencies, expenses: action.payload.expenses };
  default:
    return state;
  }
};

export default walletReducer;
