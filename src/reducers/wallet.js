import { WALLET_INFO, DELETE_EXPENSE } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

function walletReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case WALLET_INFO:
    return {
      ...state,
      currencies: action.payload.currencies,
      expenses: [...state.expenses, action.payload.expenses],
    };
  case DELETE_EXPENSE:
    return {
      ...state,
      expenses: action.payload.expenses,
    };
  default:
    return state;
  }
}

export default walletReducer;
