const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  loadedPage: false,
  expenseToEdit: {
    value: '',
    description: '',
    currency: '',
    method: '',
    tag: '',
  },
};

const walletReducer = (state = INITIAL_STATE, action) => {
  const expenses = state.expenses;

  switch (action.type) {
  case 'ADD_EXPENSE':
    const id = state.expenses.length;
    action.payload.id = id;
    return {
      ...state,
      expenses: [...state.expenses, action.payload],
    };
  
  case 'DELETE_EXPENSE':
    const filteredExpenses = expenses.filter((expense) => expense.id !== action.payload);

    return {
      ...state,
      expenses: filteredExpenses,
    };

  case 'EDIT_EXPENSE':
    const filteredExpense = expenses.filter((expense) => expense.id === action.payload);

    return {
      ...state,
      expenseToEdit: filteredExpense,
    };

  case 'REQUEST_API':
    return {
      ...state,
      loadedPage: false,
    };

  case 'REQUEST_CURRENCIES':
    delete action.data.USDT;
    return {
      ...state,
      currencies: action.data,
      loadedPage: true,
    };

  default:
    return state;
  }
};

export default walletReducer;
