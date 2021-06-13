// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
// Esse reducer será responsável por tratar as informações da pessoa usuária

const initialState = {
  currencies: [],
  expenses: [],
};

export default function wallet(state = initialState, action) {
  switch (action.type) {
  case 'GET_DATA':
    return {
      ...state, currencies: action.data,
    };
  case 'EXPENSES':
    return {
      ...state, expenses: [...state.expenses, action.data],
    };
  // case 'REQUEST_API':
  //   return state;
  default:
    return state;
  }
}
