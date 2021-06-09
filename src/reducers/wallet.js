import { SAVE_CURRENCIES } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

function wallet(state = INITIAL_STATE, { type, currencies }) {
  switch (type) {
  case SAVE_CURRENCIES:
    return {
      ...state,
      currencies: [
        ...state.currencies,
        ...currencies,
      ],
    };
  default:
    return state;
  }
}

export default wallet;
