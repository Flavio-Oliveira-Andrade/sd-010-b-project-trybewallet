// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { REQUEST_API, GET_CURRENCY, ADD_EXPENSES } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case REQUEST_API:
    return {
      ...state,
      /* inserir loading */
    };

  case GET_CURRENCY:
    return {
      ...state,
      currencies: action.data,
      /* expenses: */

    };
  case ADD_EXPENSES:
    return {
      ...state,
      expenses: [...state.expenses, action.newExpense],
    };
  default:
    return state;
  }
}

export default wallet;
