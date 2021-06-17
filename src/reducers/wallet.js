import { ADD_EXPENSE, DEL_EXPENSE, UPDATE_AMOUNT, UPDATE_EXPENSE } from '../actions';

function arrayRemove(arr, id) {
  return arr.filter((e) => e.id !== id);
}

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  amount: 0,
};

function wallet(state = INITIAL_STATE, { type, payload }) {
  const { expenses } = state;
  switch (type) {
  case ADD_EXPENSE:
    return { ...state, expenses: [...state.expenses, payload] };
  case DEL_EXPENSE:
    return { ...state, expenses: arrayRemove(state.expenses, payload) };
  case UPDATE_AMOUNT:
    return { ...state, amount: payload };
  case UPDATE_EXPENSE:
    return { ...state,
      expenses: expenses.map((expe) => {
        if (expe.id === payload.id) {
          return payload;
        }
        return expe;
      }) };
  default:
    return state;
  }
}

export default wallet;
