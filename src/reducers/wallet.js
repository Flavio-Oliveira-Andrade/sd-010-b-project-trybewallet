// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { ADD, SAVE } from '../actions/index';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SAVE:
    return {
      ...state,
      currencies: action.payload.currencies,
    };
  case ADD:
    return {
      ...state,
      expenses: [...state.expenses, action.payload.expense],
    };
  default:
    return state;
  }
};

export default wallet;
