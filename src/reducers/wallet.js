// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

import { ADD_EXPENSE, GET_EXCHANGE_FAIL, GET_EXCHANGE_START } from '../actions';

const INITIAL_STATE = {
  fetching: false,
  error: '',
  currencies: [],
  expenses: [],
};

const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_EXCHANGE_START:
    return { ...state, fetching: true };
  case GET_EXCHANGE_FAIL:
    return { ...state, fetching: false, error: action.payload };
  case ADD_EXPENSE:
    return { ...state, expenses: [...state.expenses, action.payload] };
  default:
    return state;
  }
};

export default walletReducer;
