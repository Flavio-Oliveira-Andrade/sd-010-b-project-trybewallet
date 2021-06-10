const initialState = {
  currencies: [],
  expenses: [],
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
    const expenses = action.payload;
    return {
      ...state,
      expenses,
    };
  }
  default:
    return state;
  }
}
