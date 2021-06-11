// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { GET_COINS, REQUEST_API, ADD_EXPENSE } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case REQUEST_API:
    return {
      ...state,
    };
  case GET_COINS:
    return {
      ...state,
      currencies: action.currencies,
    };
  case ADD_EXPENSE:
    return {
      ...state,
      expenses: [...state.expenses, action.expense],
    };
  default:
    return state;
  }
}

export default wallet;
