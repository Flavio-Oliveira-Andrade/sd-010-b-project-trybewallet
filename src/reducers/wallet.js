// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { REQUEST_CURRENCIES, ADD_EXPENSE,
  GET_CURRENCIES, FAILED_FETCH, UPDATE_EXPENSE,
  DELETE_EXPENSE, EDIT_EXPENSE } from '../actions';

// import { initialStateWithExpenses } from '../tests/mockData';

const initialState = {
  currencies: [],
  expenses: [],
  isFeching: false,
  error: '',
  idToEdit: null,
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
  case DELETE_EXPENSE:
    return {
      ...state,
      expenses: state.expenses.filter((expense) => expense !== action.payload),
    };
  case EDIT_EXPENSE:
    return {
      ...state,
      edit: action.payload,
      idToEdit: action.payload.id,
    };
  case UPDATE_EXPENSE:
    return {
      ...state,
      expenses: action.payload,
      edit: null,
    };
  default:
    return state;
  }
};

export default wallet;
