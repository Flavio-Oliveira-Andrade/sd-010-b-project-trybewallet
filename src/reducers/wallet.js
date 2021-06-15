// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const initialState = {
  currencies: [],
  expenses: [],
};

const wallet = (state = initialState, action) => {
  switch (action.type) {
  case 'ADD_CURRENCY':
    return {
      ...state,
      ...action.payload,
    };

  default:
    return state;
  }
};

export default wallet;
