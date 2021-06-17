import { WALLET_INFO } from '../actions/walletAction';
import { ADD_EXPENSE } from '../actions/addExpenseAction';

const INITIAL_STATE = {
  expenses: [],
  currencies: [],
  totalExpenses: 0,
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case WALLET_INFO:
    return {
      ...state,
      currencies: action.payload,
    };
  case ADD_EXPENSE:
    return {
      ...state,
      expenses: [...state.expenses, action.payload],
    };
  default:
    return state;
  }
}

export default wallet;
