// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { SAVE_EXPENSES, SAVE_CURRENCIES, SAVE_ONLY_EXPENSES } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

export default function walletReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case SAVE_EXPENSES:
    return {
      ...state,
      expenses: [...state.expenses, action.expenses],
    };
  case SAVE_ONLY_EXPENSES:
    return {
      expenses: action.expenses,
    };
  case SAVE_CURRENCIES:
    return {
      ...state,
      currencies: action.currencies,
    };
  default:
    return state;
  }
}
