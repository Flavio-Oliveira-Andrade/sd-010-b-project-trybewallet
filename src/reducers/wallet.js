import { RECEIVE_COINS, RECEIVE_EXPENSE } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  currenciesInfos: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case RECEIVE_COINS:
    return {
      ...state,
      currencies: Object.keys(action.payload.coin),
      currenciesInfos: [...state.currenciesInfos, action.payload.coin],
    };
  case RECEIVE_EXPENSE:
    return {
      ...state,
      expenses: [...state.expenses, action.payload.expenses],
    };
  default:
    return state;
  }
};

export default wallet;
