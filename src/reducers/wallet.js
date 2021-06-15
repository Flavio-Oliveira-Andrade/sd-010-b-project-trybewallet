// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { COIN_CHANGE, EXPENSES_CHANGE, ACTUAL_VALUE } from '../actions/index';

const initialState = {
  currencies: [],
  expenses: [],
  actualValue: {},
};

function walletReducer(state = initialState, action) {
  switch (action.type) {
  case COIN_CHANGE:
    return {
      ...state,
      currencies: action.payload,
    };
    // { ...state, expenses: [...state.expenses, payload] };
  case EXPENSES_CHANGE:
    return {
      ...state,
      expenses: [...state.expenses, action.payload],
    };
  case ACTUAL_VALUE:
    return {
      ...state,
      actualValue: action.payload,
    };

  default:
    return state;
  }
}

export default walletReducer;
