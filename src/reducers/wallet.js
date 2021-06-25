import {
  REQUEST_COINS_SUCESS,
  REQUEST_COINS_ERROR,
  NEW_EXPENSE } from '../actions/walletActions';

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
  default:
    return state;
  }
}
