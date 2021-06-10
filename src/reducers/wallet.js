// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { ADD, REQUEST } from '../actions/walletaction';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case REQUEST:
    return {
      ...state,
      currencies: [...state.currencies, action.currency],
    };
  case ADD:
    return {
      ...state,
      expenses: [...state.expenses, action.currency],
    };
  default:
    return state;
  }
};

export default wallet;
