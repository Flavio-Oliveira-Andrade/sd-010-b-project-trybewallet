// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'API':
    return {
      ...state,
      currencies: [action.api],
    };
  default:
    return state;
  }
};

export default reducer;
