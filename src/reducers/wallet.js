const initialState = {
  currencies: ['Vazio'],
  expenses: [],
};

function wallerReducer(state = initialState, { type, payload }) {
  switch (type) {
  case 'CURRENCY':
    return {
      ...state,
      currencies: payload.filtredsCurrs,
    };
  case 'FAILED_REQUEST':
    return {
      ...state,
      currencies: ['FAILED_REQUEST'],
    };
  default:
    return state;
  }
}

export default wallerReducer;
