import initialState from './INITIAL_STATE';

function totalSum(param) {
  const length = param.length <= 0
    ? 0
    : param.map((item) => Number(item.value) * Number(item
      .exchangeRates[item.currency].ask));
  const sum = length === 0 ? 0 : length.reduce((a, b) => a + b);
  return sum;
}
const wallet = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
  case 'ADD_EXPENSES':
    return {
      expenses: action.expenses,
    };
  case 'REQUEST_EXCHANGE':
  {
    const value = {
      ...state,
      expenses: [...state.expenses, action.payLoad],
    };
    value.total = totalSum(value.expenses);
    return value;
  }
  case 'REMOVE':
    console.log(state);
    {
      const newState = {
        ...state,
        expenses: state.expenses.filter((i) => i.id !== Number(action.payLoad)),
      };
      newState.total = totalSum(newState.expenses);
      return newState;
    }
  default:
    return state;
  }
};
export default wallet;
