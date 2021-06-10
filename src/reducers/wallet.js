import { EXCLUIR, NOVA_DESPESA } from '../actions/index';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

function walletReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case NOVA_DESPESA:
    return {
      ...state,
      expenses: [...state.expenses, action.payload],
    };
  case EXCLUIR: {
    // const { expenses } = state;
    // expenses.splice(action.payload.index, 1);
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
