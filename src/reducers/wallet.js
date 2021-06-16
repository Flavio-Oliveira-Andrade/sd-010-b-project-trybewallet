import { WALLET_INFO } from '../actions/walletAction';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  totalExpenses: 0,
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case WALLET_INFO:
    return {
      ...state,
      currencies: [],
      expenses: [],
    };

  default:
    return state;
  }
}

export default wallet;
