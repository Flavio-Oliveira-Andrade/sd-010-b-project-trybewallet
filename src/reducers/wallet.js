import { WALLET } from '../actions';

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
      currencies: action.payload,
    };

  default:
    return state;
  }
}

// const INITIAL_STATE_RESULT = {
//   results: {},
// };
