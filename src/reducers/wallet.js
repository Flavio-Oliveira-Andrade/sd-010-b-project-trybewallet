// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

import {
  ERROR_CURRENCIES,
  RECEIVE_CURRENCIES,
  REQUEST_CURRENCIES,
  SAVE_EXPENSE,
} from '../actions';

const INITIAL_WALLET_STATE = {
  currencies: [],
  expenses: [],
  isFetching: false,
  total: 0,
};

const wallet = (state = INITIAL_WALLET_STATE, action) => {
  switch (action.type) {
  case REQUEST_CURRENCIES:
    return {
      ...state,
      isFetching: action.payload.isFetching,
    };
  case RECEIVE_CURRENCIES:
    return {
      ...state,
      currencies: action.payload.currencies,
      isFetching: action.payload.isFetching };
  case ERROR_CURRENCIES:
    return {
      ...state,
      error: action.payload.error,
      isFetching: action.payload.isFetching,
    };
  case SAVE_EXPENSE:
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
};

export default wallet;
