// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
// Esse reducer será responsável por tratar as informações da pessoa usuária
const INITIAL_USER_STATE = {
  currencies: [],
  expenses: [],
  dados: { },
  isFetching: false,
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
  case 'SALVAR_DESPESA':
    return {
      ...state,
      expenses: [...state.expenses, action.payload],
    };
  case 'DELETE_EXPENSE':
    return {
      ...state,
      expenses: action.payload,
    };
  default:
    return state;
  }
};

export default wallet;
