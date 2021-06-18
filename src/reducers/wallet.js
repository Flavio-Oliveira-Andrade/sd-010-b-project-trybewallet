import { EXCLUIR, DESPESA_NOVA } from '../actions/index';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

function walletReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case DESPESA_NOVA:
    return {
      ...state,
      expenses: [...state.expenses, action.payload],
    };
  case EXCLUIR: {
    return {
      ...state,
      expenses: state.expenses.filter((elem, index) => index !== action.payload.index),
    };
  }
  default:
    return state;
  }
}

export default walletReducer;
