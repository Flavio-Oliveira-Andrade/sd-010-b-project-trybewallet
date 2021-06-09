const initialState = {
  currencies: [],
  expenses: [],
  outgoing: 0,
};

export default (state = initialState, { type /* payload */ }) => {
  switch (type) {
  case '':
    // return { ...state, ...payload };
    return state;

  default:
    return state;
  }
};
