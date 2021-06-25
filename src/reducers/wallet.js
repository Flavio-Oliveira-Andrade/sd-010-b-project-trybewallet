const initialState = {
  expenses: [],
  currencies: [],
  total: 0,
};

const update = (initialstate = initialState) => {
  const result = initialstate.expenses.length <= 0 ? 0
    : initialstate.expenses.map(({ value, currencies, rates }) => Number(value)
    * rates[currencies].ask);

  const finalValue = result === 0 ? result : result.reduce((acc, curr) => acc + curr);

  return Number(parseFloat(finalValue.toFixed(2)));
};

const walletReducer = (state = initialState, action) => {
  switch (action.type) {
  case 'SUCCESS_API':
  {
    const newState = {
      ...state,
      expenses: [...state.expenses, { id: state.expenses.length === 0 ? 0
        : state.expenses[state.expenses.length - 1].id + 1,
      ...action.payload,
      }],
    };
    newState.total = update(newState);
    return newState;
  }
  case 'EDIT_EXP': {
    state.expenses.forEach((expenses) => {
      if (expenses.id === action.payload.exp.id) {
        expenses.value = action.payload.exp.value;
        expenses.description = action.payload.exp.description;
        expenses.currencies = action.payload.exp.currencies;
        expenses.method = action.payload.exp.method;
        expenses.tag = action.payload.exp.tag;
      }
    });
    return { ...state, expenses: [...state.expenses] };
  }
  case 'DELETE_EXP': {
    const newState = {
      ...state,
      expenses: state.expenses.filter(({ id }) => id !== action.payload.id),
    };
    newState.total = update(newState);
    return newState;
  }
  default:
    return state;
  }
};

export default walletReducer;
