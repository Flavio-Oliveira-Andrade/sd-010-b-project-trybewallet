import { REQUEST_CAMBIO, ADD_EXPENSE } from '../actions';

const initialState = {
  currencies: [],
  expenses: [],
  outgoing: 0,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
  case REQUEST_CAMBIO:
    return {
      ...state,
      currencies: Object.keys(payload),
    };
  case ADD_EXPENSE:
    return {
      ...state,
      expenses: [...state.expenses, payload.expense],
    };

  default:
    return state;
  }
};
