// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const initialState = {
  currencies: [],
  expenses: [],
  loading: true,
};

const reducerFetch = (state = initialState, action) => {
  switch (action.type) {
  case 'LODING':
    return {
      ...state,
      loading: action.payload.loading,
    };
  case 'FETCH_SUCCESS':
    return {
      ...state,
      currencies: action.payload.currency,
      loading: action.payload.loading,
    };
  case 'FETCH_ERROR':
    return {
      error: action.payload.error,
      loading: action.payload.loading,
    };
  default:
    return state;
  }
};

export default reducerFetch;
