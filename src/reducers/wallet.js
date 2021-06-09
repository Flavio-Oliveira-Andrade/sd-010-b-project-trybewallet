const INITIAL_STATE = {

  currencies: [],
  expenses: [],
  isFetching: false,

};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'REQUEST':
    return {
      ...state,
      isFetching: action.payload.isFetching,
    };
  case 'ADD_MOEDAS':
    return {
      ...state,
      currencies: [action.payload.currencies],
      isFetching: action.payload.isFetching,
    };
  case 'ERROR':
    return state;
  default:
    return state;
  }
};

export default wallet;
