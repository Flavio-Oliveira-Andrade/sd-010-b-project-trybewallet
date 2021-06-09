const INITIAL_STATE = {
  currencies: [],
  expenses: [],
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
  default:
    return state;
  }
};

export default wallet;
