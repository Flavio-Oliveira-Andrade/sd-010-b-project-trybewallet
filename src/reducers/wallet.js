// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

import { ADD_MOEDA } from '../actions';

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
  /* case ERROR_FETCH:
    return {
      ...state,
      action.payload.error,
    }; */
  default:
    return state;
  }
};

export default wallet;
