import { WALLET_CURRENCIES, WALLET_EXPENSES, DELETE_EXPENSE } from '../actions';

const INITIAL_STATE = {
  currencies: [], // moeda
  expenses: [], // gastos, despesas
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case WALLET_CURRENCIES:
    return {
      ...state,
      currencies: Object.keys(action.payload.currencies), // moeda
    };
  case WALLET_EXPENSES:
    return {
      ...state,
      expenses: [...state.expenses, action.payload.expenses], // gasto, despesa
    };
  case DELETE_EXPENSE:
    return {
      ...state,
      expenses: action.payload.expenses, // remoção de despesas
    };
  default:
    return state;
  }
};

export default wallet;

// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
