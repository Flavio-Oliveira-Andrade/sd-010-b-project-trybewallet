// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import {
  EXPENSE_SUBMIT,
  CURRENT_EXCHANGE,
  DELETE_EXPENSE,
  EDIT_EXPENSE,
  CONFIRM_EDIT }
  from '../actions/index';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  currentCurrency: 'BRL',
  editMode: false,
  editExpense: {},
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case EXPENSE_SUBMIT:
    return { ...state, expenses: [...state.expenses, action.expense] };
  case CURRENT_EXCHANGE:
    return { ...state, currencies: action.exchange };
  case DELETE_EXPENSE:
    return { ...state,
      expenses: state.expenses.filter((expense) => expense.id !== action.id) };
  case EDIT_EXPENSE:
    return { ...state, editMode: true, editExpense: action.expense };
  case CONFIRM_EDIT:
    return {
      ...state,
      editMode: false,
      expenses: state.expenses.map((expense) => {
        if (expense.id === action.id) {
          return action.expense;
        } return expense;
      }) };
  default:
    return state;
  }
}

export default wallet;
