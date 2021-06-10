const initialState = {
  currencies: ['Vazio'],
  expenses: [],
  total: 0,
};

const updateTotal = ({ expenses }) => {
  const newArrTotal = expenses.length <= 0 ? 0
    : expenses.map(({ value, currency, exchangeRates }) => Number(value)
      * exchangeRates[currency].ask);

  const result = newArrTotal === 0 ? newArrTotal
    : newArrTotal.reduce((acc, nub) => acc + nub);

  return Number(parseFloat(result.toFixed(2)));
};

// const updateIds = ({ expenses }) => {
// const reorderngIdsExp = expenses.map((exp, id) => { exp.id = id; return exp; });
// console.log(reorderngIdsExp);
// };

function wallerReducer(state = initialState, { type, payload }) {
  switch (type) {
  case 'CURRENCY':
    return { ...state, currencies: payload.filtredsCurrs };

  case 'FAILED_REQUEST':
    return { ...state, currencies: ['FAILED_REQUEST'] };

  case 'EXPENSES': {
    const newState = {
      ...state,
      expenses: [...state.expenses, {
        id: state.expenses.length === 0 ? 0
          : state.expenses[state.expenses.length - 1].id + 1,
        ...payload,
      }],
    };
    newState.total = updateTotal(newState);
    return newState;
  }
  case 'DELL_EXP': {
    const newState = {
      ...state,
      expenses: state.expenses.filter(({ id }) => id !== payload.id),
    };
    newState.total = updateTotal(newState);
    return newState;
  }
  case 'EDIT_EXP': {
    console.log(payload);
    state.expenses.forEach((exp) => {
      if (exp.id === payload.exp.id) {
        exp.value = payload.exp.value;
        exp.description = payload.exp.description;
        exp.currency = payload.exp.currency;
        exp.method = payload.exp.method;
        exp.tag = payload.exp.tag;
      }
    });
    return { ...state, expenses: [...state.expenses] };
  }
  default:
    return state;
  }
}

export default wallerReducer;
