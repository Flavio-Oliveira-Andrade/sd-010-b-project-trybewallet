// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_WALLET_STATE = {

  currencies: [],
  expenses: [],
  dados: {},
  isFetching: false,

};

const wallet = (state = INITIAL_WALLET_STATE, action) => {
  switch (action.type) {
  case 'REQUEST_API':
    return {
      ...state,
      isFetching: action.payload.isFetching,
    };
  case 'REQUEST_API_SUCCESS':
    return {
      ...state,
      currencies: action.payload.moedas,
      dados: action.payload.tudo,
      isFetching: action.payload.isFetching,
    };
  case 'REQUEST_API_ERROR':
    return {
      ...state,
      error: action.payload.error,
      isFetching: action.payload.isFetching,
    };
  case 'SALVAR_DESPESA':
    return {
      ...state,
      expenses: [...state.expenses, action.payload],
    };
  default:
    return state;
  }
};

export default wallet;
