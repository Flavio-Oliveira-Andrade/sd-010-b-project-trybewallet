// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import {
  REQUEST_CURRENCIES,
  RESOLVED_CURRENCIES,
  REJECT_CURRENCIES,
  RESOLVED_EXPENSE,
  DELETE_EXPENSE,
} from '../actions/index';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  loadCurrencies: false,
  loadExpense: false,
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case REQUEST_CURRENCIES:
    return { ...state, loadCurrencies: true };
  case RESOLVED_CURRENCIES:
    return { ...state, loadCurrencies: false, currencies: action.currency };
  case REJECT_CURRENCIES:
    return { ...state, loadCurrencies: false, error: action.error };
  case RESOLVED_EXPENSE:
    return {
      ...state,
      loadExpense: false,
      expenses: [...state.expenses],
    };
  case DELETE_EXPENSE:
    return {
      ...state,
      expenses: state.expenses.filter((expense) => expense.id !== action.id),
    };
  default:
    return state;
  }
}

export default wallet;
