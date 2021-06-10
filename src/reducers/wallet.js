import { REQUEST_CAMBIO } from '../actions';

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

  default:
    return state;
  }
};
