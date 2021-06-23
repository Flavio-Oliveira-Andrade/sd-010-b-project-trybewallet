import { WALLET_INFO, ADD_EXPENSE, REMOVE_EXPENSE } from '../actions';

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

  case REMOVE_EXPENSE:
    return {
      ...state,
      expenses: [
        ...state.expenses.slice(0, action.payload.index),
        ...state.expenses.slice(action.payload.index + 1, state.expenses.length),
      ],
    };

  default:
    return state;
  }
}

export default wallet;
