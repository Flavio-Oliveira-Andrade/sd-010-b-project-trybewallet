// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { CURRENCIES, CURRENCYNOW, TOTAL } from '../actions';

const initialState = {
  currencies: [],
  expenses: [],
  totalExpenses: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
  case CURRENCIES:
    return {
      ...state,
      currencies: payload,
    };

  case CURRENCYNOW:
    return {
      ...state,
      expenses: [...state.expenses, { ...payload }],
    };

  case TOTAL:
    return {
      ...state,
      totalExpenses: [...state.totalExpenses, payload],
    };

  default:
    return state;
  }
};
