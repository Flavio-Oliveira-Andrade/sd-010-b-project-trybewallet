// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_WALLET_STATE = {
  wallet: {
    currencies: [],
    expenses: [],
  },
};

const wallet = (state = INITIAL_WALLET_STATE, action) => {
  switch (action.type) {
  // case XXXXXX:
  //   return {
  //     ...state,
  //     xxxx: 'xxxxxxx',
  //   };
  default:
    return state;
  }
};

export default wallet;
