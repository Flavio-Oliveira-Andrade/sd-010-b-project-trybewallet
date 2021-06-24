// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { SAVE_EXPENSES } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

export default function walletReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case SAVE_EXPENSES:
    return {
      ...state,
      currencies: action.payload.currencies,
      expenses: action.payload.expenses,
    };
  default:
    return state;
  }
}
