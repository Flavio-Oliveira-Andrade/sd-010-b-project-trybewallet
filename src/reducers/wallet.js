import {
  WALLET_SPEND,
} from '../actions';

const initialState = {
  currencies: [],
  expenses: [],
};

function walletReducer(state = initialState, action) {
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
