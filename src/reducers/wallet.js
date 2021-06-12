import { sumExpenses, removeExpense, editExpense } from '../functions';
import {
  SAVE_CURRENCIES_LIST,
  ADD_EXPENSES,
  SUM_EXPENSES,
  DELETE_EXPENSE,
  EDIT_EXPENSE,
  SHOW_EXPENSE,
} from '../actions';
// -------------------------------------------------------------------------------------------------
const INITIAL_STATE = {
  expenses: [],
  currencies: {},
  totalExpenses: 0,
  editingExpense: [],
  editedExpense: false,
};
// -------------------------------------------------------------------------------------------------
const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SAVE_CURRENCIES_LIST: { const { payload: { currencies } } = action;
    return {
      ...state,
      currencies,
    };
  }
  case ADD_EXPENSES: { const { payload: { expense } } = action;
    const { expenses } = state;
    return {
      ...state,
      expenses: [...expenses, expense],
    };
  }
  case SUM_EXPENSES: { const { expenses } = state;
    const totalExpenses = sumExpenses(expenses);
    return {
      ...state,
      totalExpenses,
    };
  }
  case DELETE_EXPENSE: { const { payload: { id } } = action;
    const { expenses } = state;
    const updatedExpenses = removeExpense(id, expenses);
    return {
      ...state,
      expenses: updatedExpenses,
    };
  }
  case EDIT_EXPENSE: { const { payload: { id } } = action; const { expenses } = state;
    const editedExpenses = editExpense(id, expenses);
    const { updatedExpenses, editingExpense, editedExpense } = editedExpenses;
    return {
      ...state,
      expenses: updatedExpenses,
      editingExpense,
      editedExpense,
    };
  }
  case SHOW_EXPENSE: { const { payload: { editedExpense } } = action;
    return {
      ...state,
      editedExpense,
    };
  }
  default:
    return state;
  }
};

export default walletReducer;
