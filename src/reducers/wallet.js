const initialState = {
  currencies: [],
  expenses: [],
  total: '0',
};

export default function (state = initialState, action) {
  switch (action.type) {
  case ('ADD_CURRENCIES'): {
    const currencies = action.payload;
    return {
      ...state,
      currencies,
    };
  }
  case ('ADD_EXPENSE'): {
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
}
