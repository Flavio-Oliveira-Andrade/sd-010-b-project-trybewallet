import { ADD, SAVE, REMOVE } from '../actions/types';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SAVE:
    return {
      ...state,
      currencies: action.payload.currencies,
    };
  case ADD:
    return {
      ...state,
      expenses: [...state.expenses, action.payload.expense],
    };
  case REMOVE: {
    const newExpenses = state.expenses
      .filter((expense) => expense.id !== action.payload.id);
    return {
      ...state,
      expenses: newExpenses,
    };
  }
  default:
    return state;
  }
};

export default wallet;
