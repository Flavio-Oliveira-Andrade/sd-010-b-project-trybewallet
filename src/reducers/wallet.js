// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

import {
  ADD_EXPENSE,
  GET_EXCHANGE_FAIL,
  GET_EXCHANGE_START,
  DELETE_EXPENSE,
  START_EXPENSE_EDITING,
  STOP_EXPENSE_EDITING,
  FINISH_EXPENSE_EDITING,
} from '../actions';

const INITIAL_STATE = {
  fetching: false,
  error: '',
  currencies: [],
  expenses: [],
  edit: {
    editing: false,
    id: null,
  },
};

const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_EXCHANGE_START:
    return { ...state, fetching: true };
  case GET_EXCHANGE_FAIL:
    return { ...state, fetching: false, error: action.payload };
  case ADD_EXPENSE:
    return { ...state, expenses: [...state.expenses, action.payload] };
  case START_EXPENSE_EDITING:
    return { ...state, edit: { editing: true, id: action.payload } };
  case STOP_EXPENSE_EDITING:
    return { ...state, edit: { ...state.edit, editing: false } };
  case FINISH_EXPENSE_EDITING:
    return { ...state,
      edit: { ...state.edit, id: null },
      expenses: [action.payload, ...state.expenses.filter((el) => el.id !== action.payload.id)] };
  case DELETE_EXPENSE:
    return { ...state,
      expenses: [...state.expenses.slice(0, action.payload),
        ...state.expenses.slice(action.payload + 1)] };
  default:
    return state;
  }
};

export default walletReducer;
