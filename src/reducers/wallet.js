import { CLEAR, MONEY } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

function Reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case MONEY:
    return {
      ...state,
      expenses: [...state.expenses, action.payload],
    };
  case CLEAR: {
    return {
      ...state,
      expenses: state.expenses.filter((_, index) => index !== action.payload.index),
    };
  }
  default:
    return state;
  }
}

export default Reducer;
