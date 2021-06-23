import {
  REQUEST_API, REQUEST_API_SUCESS, REQUEST_API_ERROR,
} from '../actions/currencyActions';

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
  default:
    return state;
  }
};

export default wallet;
