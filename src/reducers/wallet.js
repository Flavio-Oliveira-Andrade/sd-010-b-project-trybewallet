const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  total: '0',
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'request-success':
    return {
      ...state,
      currencies: action.payload.currencies,
    };
  case 'request-error':
    return {
      ...state,
      error: action.payload.error,
    };
  case ('add-expense'): {
    const expense = action.payload;
    const prevTotal = parseFloat(state.total);
    const thisTotal = parseFloat(
      expense.value * expense.exchangeRates[expense.currency].ask,
    );
    const actualTotal = Math.round((prevTotal + thisTotal) * 100) / 100;
    return {
      ...state,
      expenses: [...state.expenses, expense],
      total: actualTotal.toString(),
    };
  }
  default:
    return state;
  }
};

export default wallet;
