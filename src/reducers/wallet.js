import { NEW_EXPENSE, DELETE_EXPENSE, SET_EXCHANGE_RATES } from '../actions';

const INITIAL_WALLET = {
  currencies: [],
  expenses: [],
  exchangeRates: {},
  id: 0,
  total: 0,
};

export default function wallet(state = INITIAL_WALLET, action) {
  let newTotal = 0;
  let newExps = [];
  switch (action.type) {
  case NEW_EXPENSE:
    action.expenses.forEach((exp) => {
      newTotal += exp.value * exp.exchangeRates[exp.currency].ask;
    });
    return {
      ...state,
      expenses: action.expenses,
      id: state.id + 1,
      total: newTotal,
    };
  case DELETE_EXPENSE:
    newExps = state.expenses.filter((expense) => expense.id !== parseFloat(action.id));
    newExps.forEach((exp) => {
      newTotal += exp.value * exp.exchangeRates[exp.currency].ask;
    });
    return {
      ...state,
      expenses: newExps,
      total: newTotal,
    };
  case SET_EXCHANGE_RATES:
    return {
      ...state,
      currencies: action.currencies,
      exchangeRates: action.exchangeRates,
    };
  default:
    return state;
  }
}
