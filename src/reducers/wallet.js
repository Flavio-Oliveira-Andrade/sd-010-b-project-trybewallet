import { REQUEST_API, REQUEST_API_SUCCESS, REQUEST_API_ERROR } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  loading: true,
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
    };

  case REQUEST_API_ERROR:
    return {
      ...state,
      error: action.payload.error,
      loading: action.payload.loading,
    };

  default:
    return state;
  }
};

export default wallet;
