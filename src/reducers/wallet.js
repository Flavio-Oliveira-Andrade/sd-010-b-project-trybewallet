const INITIAL_STATE = {

  currencies: [],
  expenses: [],
  isFetching: false,
  total: 0,
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'ERROR_CURRENCIE':
    return state;
  case 'REQUEST':
    return {
      ...state,
      isFetching: action.payload.isFetching,
    };
  case 'ADD_MOEDAS':
    return {
      ...state,
      currencies: [action.payload.currencies],
      isFetching: action.payload.isFetching,
    };
  case 'ADD_EXPENSE':
    return {
      ...state,
      expenses: [...state.expenses, action.payload.expense],
    };
  case 'CALC_TOTAL': {
    let totalCalculado = 0;
    state.expenses.forEach(({ totalExpense }) => {
      totalCalculado += parseInt(totalExpense, 10);
    });
    return {
      ...state,
      total: totalCalculado,
    };
  }
  case 'ERROR':
    return state;
  default:
    return state;
  }
};

export default wallet;
