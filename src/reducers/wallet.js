// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const getArrayCurrencies = (action) => {
  let currenciesArray = [];
  currenciesArray = Object.entries(action.payload.currencies);
  return currenciesArray.filter((currency) => (currency[0] !== 'USDT'));
};

const deleteExpense = (expenses, action) => {
  console.log('dentro de deleteExpense');
  return expenses.filter((expense) => expense.id !== action.payload.id);
};

const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'GET_CURRENCIES':
    return { ...state, currencies: getArrayCurrencies(action) };
  case 'SAVE_EXPENSE':
    return { ...state, expenses: [...state.expenses, action.payload.expense] };
  case 'DELETE_EXPENSE':
    console.log('dentro de delete expense');
    return { ...state, expenses: [...deleteExpense(state.expenses, action)] };
  default:
    return state;
  }
};

export default walletReducer;
