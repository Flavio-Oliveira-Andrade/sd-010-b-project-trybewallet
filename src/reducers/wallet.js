import { REQUEST_CURRENCY } from '../actions/types';

const initialState = {
  currencies: [],
  expenses: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
  case REQUEST_CURRENCY:
    return { currencies: Object.keys(payload) };

  default:
    return state;
  }
};
