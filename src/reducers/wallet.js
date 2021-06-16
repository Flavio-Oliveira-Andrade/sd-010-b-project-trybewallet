import { WALLET, SPENDING } from '../actions';

const INITIAL_STATE = {
  expenses: [],
  currencies: [],
  totalExpenses: [],
};

export default function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case WALLET:
    return {
      ...state,
      currencies: Object.keys(action.payload),
    };
  case SPENDING:
    return {
      ...state,
      expenses: [...state.expenses, action.payload],
    };
  default:
    return state;
  }
}

// const INITIAL_STATE_RESULT = {
//   results: {},
// };
