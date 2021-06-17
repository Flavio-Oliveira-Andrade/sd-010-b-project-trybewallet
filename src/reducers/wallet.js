// // Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { FETCH_API, FETCH_CURRENCY, ADD_EXPENSE } from '../actions';

const WALLET_INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

function wallet(state = WALLET_INITIAL_STATE, action) {
  switch (action.type) {
  case FETCH_API:
    return {
      ...state,
    };

  case FETCH_CURRENCY:
    return {
      ...state,
      currencies: action.data,
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
