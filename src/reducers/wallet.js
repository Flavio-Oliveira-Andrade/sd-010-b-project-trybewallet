import {
  SET_CURRENCIES,
  UPDATE_EXPENSE,
  ADD_EXPENSE, REMOVE_EXPENSE, EDIT_EXPENSE, HANDLE_EXPENSE } from '../actions';

const INITIAL_WALLET = {
  edit: false,
  currencies: [],
  currencies2: [],
  expenses: [],
  expense: {},
};

export default (state = INITIAL_WALLET, action) => {
  const { expenses, expense } = state;
  switch (action.type) {
  case SET_CURRENCIES:
    return { ...state, currencies: action.currencies, currencies2: action.currencies2 };
  case ADD_EXPENSE:
    return { ...state, expenses: [...expenses, action.expense] };
  case REMOVE_EXPENSE:
    return { ...state, expenses: expenses.filter(({ id }) => id !== action.expense) };
  case EDIT_EXPENSE:
    return { ...state, edit: action.edit };
  case UPDATE_EXPENSE:
    return { ...state,
      expenses: expenses.map((expe) => {
        if (expe.id === action.expense.id) return { ...action.expense };
        return expe;
      }) };
  case HANDLE_EXPENSE:
    return { ...state, expense: { ...expense, ...action.handle } };
  default:
    return state;
  }
};
