// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

const INITIAL_STATE = ({
  currencies: [],
  expenses: [],
});

const WalletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ('WALLET_ACTION'):
    return ({
      ...state,
      wallet: {
        ...state.wallet,
        currencies: action.payload.currencies,
        expenses: action.payload.expenses,
      },
    });
  default:
    return state;
  }
};

export default WalletReducer;
