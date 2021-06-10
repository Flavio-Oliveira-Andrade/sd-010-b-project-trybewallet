// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { GET_COINS, REQUEST_API } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  isFetching: false,
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case REQUEST_API:
    return {
      ...state,
      isFetching: true,
    };
  case GET_COINS:
    return {
      ...state,
      isFetching: false,
      currencies: action.currencies,
    };
  default:
    return state;
  }
}

export default wallet;
