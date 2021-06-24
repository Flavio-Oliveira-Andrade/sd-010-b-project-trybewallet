import {
  REQUEST_API, REQUEST_API_SUCCESS, REQUEST_ERROR,
} from '../actions/apiActions';
import {
  ADD_EXPENSE, DELETE_EXPENSE,
} from '../actions/formActions';

const INITIAL_WALLET_STATE = {
  currencies: [],
  expenses: [],
  isLoading: false,
  error: null,
};

const wallet = (state = INITIAL_WALLET_STATE, action) => {
  switch (action.type) {
  case REQUEST_API:
    return ({
      ...state,
      isLoading: true,
    });
  case REQUEST_API_SUCCESS:
    return ({
      ...state,
      currencies: [...Object.keys(action.payload)],
      isLoading: false,
    });
  case REQUEST_ERROR:
    return ({
      ...state,
      error: action.payload.error,
      isLoading: false,
    });
  case ADD_EXPENSE:
    return ({
      ...state,
      expenses: [...state.expenses, action.payload],
    });
  case DELETE_EXPENSE:
    return ({
      ...state,
      expenses: action.payload,
    });
  default:
    return state;
  }
};

export default wallet;
