import { WALLET_SPEND, DELET_EXPENSE } from '../actions';

const userDefaul = {
  currencies: [],
  expenses: [],
};

function walletReducer(state = userDefaul, action) {
  const newArrayExpenses = state.expenses.filter(({ id }) => id !== action.id);
  switch (action.type) {
  case WALLET_SPEND:
    return {
      ...state,
      expenses: [...state.expenses, action.newSpend],
    };
  case DELET_EXPENSE:
    return {
      ...state,
      expenses: newArrayExpenses,
    };
  default:
    return state;
  }
}

export default walletReducer;
