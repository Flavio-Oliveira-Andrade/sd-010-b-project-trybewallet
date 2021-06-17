import { WALLET_INFO } from '../actions/walletAction';

const INITIAL_STATE = {
  expenses: [],
  currencies: [],
  totalExpenses: 0,
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case WALLET_INFO:
    return {
      ...state,
      currencies: action.payload,
    };

  default:
    return state;
  }
}

export default wallet;
