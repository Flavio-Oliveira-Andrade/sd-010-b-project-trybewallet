// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  expenses: [],
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'SAVE_EXPENSE':
    return { expenses: [...state.expenses, action.payload.expense] };
  default:
    return state;
  }
}

export default wallet;
