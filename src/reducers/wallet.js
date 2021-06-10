// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { EXPENSES, CURRENCIES } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};
export default function walletReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case CURRENCIES: {
    return {
      ...state,
      currencies: [...state.currencies, action.payload.currencies],
    };
  }
  case EXPENSES: {
    return {
      ...state,
      expenses: [...state.expenses, ...action.payload.expenses],
    };
  }
  default:
    return state;
  }
}
