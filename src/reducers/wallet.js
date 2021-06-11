// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { SELECT_CURRENCIES, USER_EXPENSES } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SELECT_CURRENCIES:
    return {
      ...state,
      currencies: action.currencies,
    };
  case USER_EXPENSES:
    return {
      ...state,
      expenses: action.expenses,
    };
  default:
    return state;
  }
};

export default wallet;
