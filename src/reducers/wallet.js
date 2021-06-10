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
      data: action.payload.data,
    };
  case 'FETCH_ERROR':
    return {
      error: action.payload.error,
      loading: action.payload.loading,
    };
  case 'SAVE_STATE':
    return {
      ...state,
      expenses: [...state.expenses, action.saveState],
    };
  default:
    return state;
  }
};
// const reducerExpenses = (state = initialState, action) => {
//   switch (action.type) {
//   case 'SAVE_STATE':
//     return {
//       ...state,
//       expenses: [...state.expenses, action.saveState],
//     };
//   default:
//     return state;
//   }
// };
export default reducerFetch;
