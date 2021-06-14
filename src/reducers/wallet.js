// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import {
  ACTION_WALLET_CURRENCIES,
  // ACTION_WALLET_EXPENSES,
  ACTION_WALLET_STATE_EXPENSES,
} from '../actions/index';

const INITIAL_STATE_WALLET = {
  currencies: [],
  expenses: [],
};

function wallet(state = INITIAL_STATE_WALLET, action) {
  switch (action.type) {
  case ACTION_WALLET_CURRENCIES:
    return {
      ...state, currencies: action.currencies,
    };
  case ACTION_WALLET_STATE_EXPENSES:
    return {
      ...state, expenses: [...state.expenses, action.payload],
    };
  // case ACTION_WALLET_EXPENSES:
  //   return {
  //     ...state,
  //     expenses: {
  //       exchangeRates: action.expense,
  //     },
  //   };
  default:
    return state;
  }
}

export default wallet;
