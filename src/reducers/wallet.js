import {
  REQUEST_COINS_SUCESS,
  REQUEST_COINS_ERROR,
  NEW_EXPENSE,
  DEL_EXPENSE } from '../actions/walletActions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

export default function walletReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case REQUEST_COINS_SUCESS:
    return {
      ...state,
      currencies: action.payload.coins,
    };
  case REQUEST_COINS_ERROR:
    return {
      ...state,
      error: action.payload.error,
    };
  case NEW_EXPENSE:
    return ({
      ...state,
      expenses: [
        ...state.expenses,
        action.expense,
      ],
    });
  case DEL_EXPENSE:
    return {
      ...state,
      expenses: action.payload,
    };
  default:
    return state;
  }
}
