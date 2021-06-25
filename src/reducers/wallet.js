// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import INITIAL_STATE from './INITIAL_STATE';

function calculatorTotal(param) {
  const returned = param.length <= 0
    ? 0
    : param.map((i) => Number(i.value) * Number(i.exchangeRates[i.currency].ask));
  const calculated = returned === 0 ? 0 : returned.reduce((a, b) => a + b);
  return calculated;
}

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'LOAD_DATA_SUCCESS':
  {
    const StateValue = {
      ...state,
      expenses: [...state.expenses, action.payLoad],
    };
    StateValue.total = calculatorTotal(StateValue.expenses);
    return StateValue;
  }
  case 'REMOVE_SUCCESS':
    console.log(action);
    console.log(state);
    {
      const newState = {
        ...state,
        expenses: state.expenses.filter((i) => i.id !== Number(action.payLoad)),
      };
      newState.total = calculatorTotal(newState.expenses);
      return newState;
    }
  default:
    return state;
  }
};

export default wallet;
