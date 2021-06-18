import { MOEDA } from '../actions';

const initialState = {
  currencies: [],
  expenses: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
  case MOEDA:
    return {
      ...state,
      currencies: payload,
    };

  default:
    return state;
  }
};
