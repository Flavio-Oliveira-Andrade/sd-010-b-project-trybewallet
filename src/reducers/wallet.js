import { ADD_EXPENSE, DELETE_EXPENSE, GET_CURRENCY } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  currenciesInfo: {},
  expenses: [],
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case GET_CURRENCY:
    delete action.payload.USDT;
    delete action.payload.DOGE;
    return {
      ...state,
      currencies: Object.keys(action.payload),
      currenciesInfo: action.payload,
    };
  case ADD_EXPENSE:
    return {
      ...state,
      expenses: [
        ...state.expenses,
        action.payload,
      ],
    };
  case DELETE_EXPENSE:
    return {
      ...state,
      expenses: state.expenses.filter(({ id }) => id !== action.payload),
    };
  default:
    return state;
  }
}

export default wallet;
