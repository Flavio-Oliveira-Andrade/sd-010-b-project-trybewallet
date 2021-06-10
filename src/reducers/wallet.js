// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { COIN_CHANGE, EXPENSES_CHANGE } from '../actions/index';

const initialState = {
  currencies: [],
  expenses: [],
};

function walletReducer(state = initialState, action) {
  switch (action.type) {
  case COIN_CHANGE:
    return {
      ...state,
      currencies: action.payload,
    };
  case EXPENSES_CHANGE:
    return {
      ...state,
      expenses: action.payload,
    };
  default:
    return state;
  }
}

export default walletReducer;
