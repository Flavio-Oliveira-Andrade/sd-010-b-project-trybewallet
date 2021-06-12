// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

import { ADD_MOEDA, ADD_EXPENSE } from '../actions';

const INICIAL_STATE = {
  totalExpense: 0,
  currencies: [],
  expenses: [],
};

const wallet = (state = INICIAL_STATE, action) => {
  switch (action.type) {
  case ADD_MOEDA:
    return {
      ...state,
      currencies: action.payload,
    };
  case ADD_EXPENSE:
    return {
      ...state,
      expenses: [...state.expenses, action.payload.expenses],
    };
  default:
    return state;
  }
};

export default wallet;
