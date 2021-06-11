// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import {
  GET_CURRENCIES, GET_CURRENCIES_SUCCESS, ADD_EXPENSES, GET_CURRENCIES_SUCCESS_EXCHANGE,
} from '../actions';

const INITIAL_STATE = {
  totalExpenses: 0,
  currencies: [],
  currencies2: {},
  expenses: [],
};

function walletReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case GET_CURRENCIES:
    return { ...state };
  case GET_CURRENCIES_SUCCESS:
    return { ...state, currencies: action.currencies };
  case GET_CURRENCIES_SUCCESS_EXCHANGE:
    return { ...state, currencies2: action.currencies2 };
  case ADD_EXPENSES:
    return { ...state, expenses: [...state.expenses, action.expenses] };
  default:
    return state;
  }
}

export default walletReducer;
