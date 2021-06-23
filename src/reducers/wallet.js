import {
  REQUEST_API, REQUEST_API_SUCESS, REQUEST_API_ERROR,
} from '../actions/getCurrencyActions';
import {
  CREATE_EXCHANGE, REMOVE_EXPENSE,
} from '../actions/tableActions';
// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

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
  case REQUEST_API_SUCESS:
    return ({
      ...state,
      currencies: [...Object.keys(action.payload)],
      isLoading: false,
    });
  case REQUEST_API_ERROR:
    return ({
      ...state,
      error: action.payload.error,
      isLoading: false,
    });
  case CREATE_EXCHANGE:
    return ({
      ...state,
      expenses: [...state.expenses, action.payload],
    });
  case REMOVE_EXPENSE:
    return ({
      ...state,
      expenses: action.payload,
    });
  default:
    return state;
  }
};

export default wallet;
