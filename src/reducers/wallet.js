import { EXPENSE_DATA, REQUEST_CURRENCY, RECEIVE_CURRENCY } from '../actions/index';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case EXPENSE_DATA:
    return {
      ...state,
      expenses: [...state.expenses, action.payload],
    };
  case REQUEST_CURRENCY:
    return {
      ...state,
    };
  case RECEIVE_CURRENCY:
    return {
      ...state,
      currencies: action.payload,
    };
  default:
    return state;
  }
}

export default wallet;
