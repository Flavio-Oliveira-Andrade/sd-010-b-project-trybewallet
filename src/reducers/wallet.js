import { WALLET_SPEND } from '../actions';

const userDefaul = {
  currencies: [],
  expenses: [],
};

function walletReducer(state = userDefaul, action) {
  switch (action.type) {
  case WALLET_SPEND:
    return {
      ...state,
      expenses: [...state.expenses, action.newSpend],
    };
  default:
    return state;
  }
}

export default walletReducer;
