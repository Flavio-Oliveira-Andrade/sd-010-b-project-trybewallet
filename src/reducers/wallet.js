// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

import { CURRENCIES, EXPENSES } from '../actions';

const initialState = {
  currencies: [],
  expenses: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
  case CURRENCIES:
    return {
      ...state,
      currencies: payload,
    };

  case EXPENSES:
    return {
      ...state,
      expenses: payload,
    };

  default:
    return state;
  }
};
