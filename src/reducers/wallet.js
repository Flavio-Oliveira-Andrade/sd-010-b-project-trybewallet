// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const initialState = {
  currences: [],
  expenses: [],
};

const wallet = (state = initialState, action) => {
  switch (action.type) {
  case 'START_LOADING':
    return { ...state, loading: true };
  case 'COIN':
    return { ...state, currences: action.payload };
  case 'ADD_ EXPENSE':
    return { ...state, expenses: [...state.expenses, action.payload] };
  default:
    return state;
  }
};

export default wallet;
