const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  loadedPage: false,
};

const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'ADD_EXPENSE':
    const id = state.expenses.length;
    action.payload.id = id;
    return {
      ...state,
      expenses: [...state.expenses, action.payload],
    }

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
