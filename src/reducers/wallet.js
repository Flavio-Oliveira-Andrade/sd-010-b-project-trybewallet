// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { ADD_COIN, ADD_EXPENSE } from '../actions';

const initialState = {
  currencies: [],
  expenses: [],
  totalExpenses: 0,
};

const wallet = (state = initialState, action) => {
  switch (action.type) {
  case ADD_COIN:
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
