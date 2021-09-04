// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { GET_COINS, REQUEST_API, ADD_EXPENSE, DEL_EXPENSE } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

function wallet(state = INITIAL_STATE, action) {
  const { toDelete } = action;

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
  case DEL_EXPENSE:
    return {
      ...state,
      expenses: state.expenses.filter((_data, i) => i !== toDelete.index),
    };
  default:
    return state;
  }
}

export default wallet;

/* expenses: [
  state.expenses.filter((item, index) => index !== action.expense),
],
}; */
