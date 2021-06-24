// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import {
  REQUEST_CURRENCIES,
  RESOLVED_CURRENCIES,
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
  default:
    return state;
  }
}

export default wallet;
