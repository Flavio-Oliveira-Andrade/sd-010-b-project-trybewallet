// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  currencies: [], // moedas
  expenses: [], // despesas
  total: 0,
};

export default function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'ADD_DESPESA':
    return { ...state, expenses: [...state.expenses, action.despesa] };
  case 'ADD_DESPESATOTAL':
    return { ...state, total: action.despesa };
  default:
    return state;
  }
}
