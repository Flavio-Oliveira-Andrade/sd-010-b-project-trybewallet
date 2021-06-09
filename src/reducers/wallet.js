// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { GET_CURRENCIES, GET_CURRENCIES_SUCCESS } from '../actions';

const INITIAL_STATE = {
  totalExpenses: 0,
  currencies: [],
};

function walletReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case GET_CURRENCIES:
    return { ...state };
  case GET_CURRENCIES_SUCCESS:
    return { ...state, currencies: action.currencies };
  default:
    return state;
  }
}

export default walletReducer;
