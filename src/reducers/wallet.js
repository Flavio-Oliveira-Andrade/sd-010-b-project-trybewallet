import { ADD_EXPENSE, REQUEST_CURRENCY } from '../actions/types';

const initialState = {
  currencies: [],
  expenses: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
  case REQUEST_CURRENCY:
    return { expenses: [], currencies: Object.keys(payload) };
  case ADD_EXPENSE:
    return { ...state, expenses: [...state.expenses, payload] };
  default:
    return state;
  }
};
