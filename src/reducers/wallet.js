import NEW_EXPENSE from '../actions/walletActions';

const WALLET_STATE = {
  currencies: [],
  expenses: [],
};

function walletReducer(state = WALLET_STATE, action) {
  switch (action.type) {
  case NEW_EXPENSE:
    return {
      ...state,
      expenses: [
        ...state.expenses,
        action.payload,
      ],
    };
  default:
    return state;
  }
}

export default walletReducer;
