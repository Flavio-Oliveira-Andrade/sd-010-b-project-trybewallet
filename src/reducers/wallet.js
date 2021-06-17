// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

// function wallet(state = INITIAL_STATE, { type, despesa }) {
//   switch (type) {
//   case 'USER_LOGIN':
//     return { ...state, expenses: [...state.expenses, despesa] };
//   default:
//     return state;
//   }
// }
function wallet(state = INITIAL_STATE, { type, despesa }) {
  switch (type) {
  case 'USER_LOGIN':
    return {
      ...state,
      expenses: [
        ...state.expenses,
        despesa,
      ],
    };
  default:
    return state;
  }
}

export default wallet;
