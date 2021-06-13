// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  id: 0,
};

function reducerGastos(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'DESPESA':
    return { ...state,
      expenses: [
        ...state.expenses,
        { id: state.id, ...action.value.expenses }],
      id: state.id + 1 };
  default:
    return state;
  }
}

export default reducerGastos;
