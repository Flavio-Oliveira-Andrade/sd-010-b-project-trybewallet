// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { ACTION_WALLET_CURRENCIES } from '../actions/index';

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
  default:
    return state;
  }
}

export default wallet;
