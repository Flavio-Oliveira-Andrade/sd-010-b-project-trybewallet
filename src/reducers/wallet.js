import { REQUEST_CURRENCY } from '../actions/types';

const initialState = {
  currencies: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
  case REQUEST_CURRENCY:
    return { currencies: Object.keys(payload) };

  default:
    return state;
  }
};
