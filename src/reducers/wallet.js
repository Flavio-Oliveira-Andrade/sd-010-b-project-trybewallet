import { ADD_EXPENSE, DEL_EXPENSE } from '../actions';

function arrayRemove(arr, id) {
  return arr.filter((e) => e.id !== id);
}

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

function wallet(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
  case ADD_EXPENSE:
    return { ...state, expenses: [...state.expenses, payload] };
  case DEL_EXPENSE:
    return { ...state, expenses: [arrayRemove(state.expenses, payload)] };
  default:
    return state;
  }
}

export default wallet;
