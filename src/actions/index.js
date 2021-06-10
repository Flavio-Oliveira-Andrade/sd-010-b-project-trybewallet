import fetchCurrencies from '../services/API';

// Login
export const userLogin = (email) => ({
  type: 'USER_LOGIN',
  payload: email,
});

// Adiciona as opções de moedas
export const addCurrencies = (currencies) => ({
  type: 'ADD_CURRENCIES',
  payload: currencies,
});

export const dispatchFetchedCurrencies = () => async (dispatch) => {
  const currencies = await fetchCurrencies();
  dispatch(addCurrencies(currencies));
};

// Adiciona um gasto
export const AddExpense = ((expense) => ({
  type: 'ADD_EXPENSE',
  payload: expense,
}));

const MINUS_ONE = -1;
let nextExpenseId = MINUS_ONE;

export const dispatchExpense = (expenseInformation) => async (dispatch) => {
  const exchangeRates = await fetchCurrencies();
  const expense = {
    id: nextExpenseId += 1,
    ...expenseInformation,
    exchangeRates,
  };
  dispatch(AddExpense(expense));
};
