import { WALLET_INFO, ADD_EXPENSE } from '../actions';

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
      currencies: Object.keys(action.payload),
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
