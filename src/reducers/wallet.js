const INITIAL_STATE = ({
  currencies: [],
  expenses: [],
});

const WalletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ('WALLET_ACTION'):
    return ({
      ...state,
      expenses: [...state.expenses, action.dispenseInfo],
    });
  case ('DELETE_ACTION'):
    return ({
      ...state,
      expenses: action.expenses,
    });
  default:
    return state;
  }
};

export default WalletReducer;
