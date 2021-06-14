import { REQUEST_API,
  REQUEST_API_SUCCESS,
  REQUEST_API_ERROR,
  REQUEST_EXPENSES } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  loading: true,
  exchangeRates: {},
  error: '',
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case REQUEST_API:
    return {
      ...state,
      loading: action.payload.loading,
    };

  case REQUEST_API_SUCCESS:
    return {
      ...state,
      currencies: action.payload.currencies,
      loading: action.payload.loading,
      exchangeRates: action.payload.exchangeRates,
    };

  case REQUEST_API_ERROR:
    return {
      ...state,
      error: action.payload.error,
      loading: action.payload.loading,
    };

  case REQUEST_EXPENSES:
    return {
      ...state,
      expenses: [...state.expenses, action.payload.expense],
    };

  default:
    return state;
  }
};

export default wallet;
