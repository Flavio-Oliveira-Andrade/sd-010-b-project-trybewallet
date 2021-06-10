import sumExpenses from '../functions';

import {
  SAVE_CURRENCIES_LIST,
  ADD_EXPENSES,
  SUM_EXPENSES,
} from '../actions';

// -------------------------------------------------------------------------------------------------
const INITIAL_STATE = {
  expenses: [],
  currencies: {},
  totalExpenses: 0,
};
// -------------------------------------------------------------------------------------------------

const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SAVE_CURRENCIES_LIST: {
    const { payload: { currencies } } = action;
    return {
      ...state,
      currencies,
    };
  }

  case ADD_EXPENSES: {
    const { payload: { expense } } = action;
    const { expenses } = state;
    return {
      ...state,
      expenses: [...expenses, expense],
    };
  }

  case SUM_EXPENSES: {
    const { expenses } = state;
    const totalExpenses = sumExpenses(expenses);
    return {
      ...state,
      totalExpenses,
    };
  }

  default:
    return state;
  }
};

export default walletReducer;
