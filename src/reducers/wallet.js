import { ADD_EXPENSE } from '../actions';

const INITIAL_WALLET = {
  currencies: [],
  expenses: [],
};

export default (state = INITIAL_WALLET, action) => {
  const { type, expense } = action;
  switch (type) {
  case ADD_EXPENSE:
    return {
      ...state,
      expenses: [state.expenses, expense],
    };
  default:
    return state;
  }
};
