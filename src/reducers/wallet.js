// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { GET_CURRENCIES, USER_EXPENSES, IS_FETCH } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  // expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case IS_FETCH:
    return {
      ...state,
    };
  case GET_CURRENCIES:
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
