// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { FETCH_URL,
  FETCH_URL_SUCCESS,
  FETCH_URL_ERROR,
  GET_CURRENCIES,
  ADD_EXPENSE,
  REMOVE_EXPENSE,
  EDIT_EXPENSE } from '../actions';

const initialState = {
  currencies: [],
  expenses: [],
  error: null,
  loading: false,
};

const walletReducer = (state = initialState, action) => {
  switch (action.type) {
  case FETCH_URL:
    return {
      ...state,
      loading: true,
    };
  case GET_CURRENCIES:
    return {
      ...state,
      loading: false,
      currencies: action.payload.currencies,
    };
  case FETCH_URL_SUCCESS:
    return {
      ...state,
      loading: false,
      data: action.payload,
    };
  case ADD_EXPENSE:
    return {
      ...state,
      loading: false,
      expenses: [...state.expenses, action.payload.expense],
    };
  case REMOVE_EXPENSE:
    return {
      ...state,
      expenses: state.expenses.filter((line) => line !== action.payload.expense),
    };
  case EDIT_EXPENSE:
    return {
      ...state,
      editionKey: action.payload.expense,
    };
  case FETCH_URL_ERROR:
    return {
      ...state,
      loading: false,
      error: action.payload.error,
    };
  default:
    return state;
  }
};

export default walletReducer;
