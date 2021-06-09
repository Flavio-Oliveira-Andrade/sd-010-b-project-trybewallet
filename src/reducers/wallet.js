import { SAVE_CURRENCIES, SAVE_EXPENSES, UPDATE_EXCHANGE } from '../actions';

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
  case UPDATE_EXCHANGE:
    return {
      ...state,
      exchangeRates,
    };
  case SAVE_EXPENSES:
    return {
      ...state,
      expenses: [...state.expenses, { ...expense, exchangeRates: state.exchangeRates }],
    };
  default:
    return state;
  }
}

export default wallet;
