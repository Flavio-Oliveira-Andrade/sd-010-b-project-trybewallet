// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { WALLET } from '../actions';

const INITIAL_STATE = {
  wallet: {
    currencies: [],
    expenses: [],
  },
};
export default function walletReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case WALLET: {
    return {
      ...state,
      email: action.payload.email,
    };
  }
  default:
    return state;
  }
}
