// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const initialState = { currencies: [], expenses: [] };

export default function wallet(state = initialState, action) {
  switch (action.type) {
  case '':
    return state;
  default:
    return state;
  }
}
