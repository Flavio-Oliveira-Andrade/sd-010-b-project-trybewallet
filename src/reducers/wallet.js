import { WALLET_INFO } from '../actions';

const INITIAL_STATE = {
  wallet: {
    currencies: [],
    expenses: [],
  },
};

// { EXPENSES: [], }?

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case WALLET_INFO:
    return { expenses: state.expenses.concat(action.payload) };
  default:
    return state;
  }
};

export default wallet;

// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
