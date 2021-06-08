// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { NEW_EXPENSE, SET_EXCHANGE_RATES } from '../actions';

const INITIAL_WALLET = {
  currencies: [],
  expenses: [],
  exchangeRates: {},
  id: 0,
  total: 0,
};

export default function wallet(state = INITIAL_WALLET, action) {
  switch (action.type) {
  case NEW_EXPENSE:
    return {
      ...state,
      expenses: action.expenses,
      id: state.id + 1,
      total: action.total,
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
