const INITIAL_STATE = { currencies: [], expenses: [], edit: { status: false, id: '' } };

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'UPDATE_CURRENCIES':
    return { ...state, currencies: action.data };
  case 'ADD_EXPENSE':
    return { ...state,
      expenses: [...state.expenses, action.data] };
  case 'DELETE_EXPENSE':
    return { ...state,
      expenses: [...state.expenses.filter((expense) => action.data !== expense.id)] };
  case 'TO_EDIT':
    return { ...state, edit: { status: action.status, id: action.id } };
  case 'EDIT_EXPENSE':
    return { ...state,
      expenses: [...state.expenses.map((expense) => (expense.id === action.data.id
        ? action.data
        : expense
      ))] };
  default:
    return state;
  }
};

export default wallet;
