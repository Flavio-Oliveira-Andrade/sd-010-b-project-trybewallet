// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

import { CURRENCIES } from '../actions';

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

  default:
    return state;
  }
};
