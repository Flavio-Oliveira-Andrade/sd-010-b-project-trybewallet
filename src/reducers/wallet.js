// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const initialState = {
  currencies: [],
};

const wallet = (state = initialState, action) => {
  switch (action.type) {
  case 'RECEIVE_API':
    return {
      ...state,
      currencies: action.currency,
    };
  default:
    return state;
  }
};

export default wallet;
