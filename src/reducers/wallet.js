// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
// Esse reducer será responsável por tratar as informações da pessoa usuária
const INITIAL_USER_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_USER_STATE, action) => {
  switch (action.type) {
  case 'REQUEST_API':
    return {
      ...state,
    };
  case 'REQUEST_API_SUCCESS':
    return {
      ...state,
      currencies: action.payload.moedas,
      dados: action.payload.tudo,
    };
  case 'REQUEST_API_ERROR':
    return {
      ...state,
      error: action.payload.error,
    };
  default:
    return state;
  }
};

export default wallet;
