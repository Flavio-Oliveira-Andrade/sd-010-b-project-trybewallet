const initialState = {
  currencies: [],
  expenses: [],
};

function wallet(state = initialState, action) {
  switch (action.type) {
  case 'RECEIVE_CURRENCIES':
    return {
      ...state,
      currencies: Object.keys(action.payload.currencies),
    };
  default:
    return state;
  }
}

export default wallet;
