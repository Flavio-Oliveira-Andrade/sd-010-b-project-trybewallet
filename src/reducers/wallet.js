import {
  FETCH_CURRENCIES_LIST_SUCCESS,
  FETCH_CURRENCIES_LIST_ERROR,
} from '../actions';

// -------------------------------------------------------------------------------------------------
const INITIAL_STATE = {
  expenses: [],
  currencies: [],
  totalExpenses: 0,
  updateSum: true,
};
// -------------------------------------------------------------------------------------------------

const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case FETCH_CURRENCIES_LIST_SUCCESS: {
    const { payload: { currencies } } = action;
    return {
      ...state,
      currencies,
    };
  }
  case FETCH_CURRENCIES_LIST_ERROR: {
    const { payload: { error } } = action;
    return {
      ...state,
      error,
    };
  }
  default:
    return state;
  }
};

export default walletReducer;
