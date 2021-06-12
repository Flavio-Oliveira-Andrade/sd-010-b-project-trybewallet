// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { REQUEST_CURRENCIES, ADD_EXPENSE,
  GET_CURRENCIES, FAILED_FETCH } from '../actions';

const initialState = {
  currencies: [],
  expenses: [],
  isFeching: false,
  error: '',
};

const wallet = (state = initialState, action) => {
  switch (action.type) {
  case ADD_EXPENSE:
    return {
      ...state,
      expenses: [...state.expenses, action.payload],
    };
  case REQUEST_CURRENCIES:
    return {
      ...state,
      isFeching: true,

    };
  case GET_CURRENCIES:
    return {
      ...state,
      currencies: action.payload,
      isFeching: false,
    };
  case FAILED_FETCH:
    return {
      ...state,
      error: action.payload,
      isFeching: false,
    };
  default:
    return state;
  }
};

export default wallet;
