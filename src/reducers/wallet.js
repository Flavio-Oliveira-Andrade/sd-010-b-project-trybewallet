// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const initialState = {
  expenses: [],
  currences: [],
};

function expenseReducer(state = initialState, action) {
  switch (action.type) {
  case 'ADD_EXPENSE':
    return ({
      ...state,
      expenses: [...state.expenses, action.payload],
    });
  default:
    return state;
  }
}

export default expenseReducer;
