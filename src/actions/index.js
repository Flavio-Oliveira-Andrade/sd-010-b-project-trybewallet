// Coloque aqui suas actions
import { getCurrencies, getCurrenciesAll } from '../services/api';

export const loginAction = (value) => ({
  type: 'LOGIN',
  value,
});

export const requestCurrenciesOk = (currencies) => ({
  type: 'ADD_CURRENCY',
  payload: { currencies },
});

export const requestExchangeOk = (exchangeRates) => ({
  type: 'ADD_EXCHANGE',
  payload: { exchangeRates },
});

export const addExpense = (expense, exchangeRates) => ({
  type: 'ADD_EXPENSE',
  payload: { ...expense, exchangeRates },
});

export const actionThunkExpenses = () => async (dispatch) => {
  const result = await getCurrenciesAll();
  delete result.USDT;
  return dispatch(requestExchangeOk(result));
};

export const fetchCurrencies = () => (dispatch) => {
  getCurrencies()
    .then((res) => dispatch(requestCurrenciesOk(res)));
};

export const addExpenseWithRate = (expense) => (dispatch) => {
  getCurrenciesAll()
    .then((res) => dispatch(requestExchangeOk(res)))
    .then(({ payload:
      { exchangeRates } }) => dispatch(addExpense(expense, exchangeRates)));
};
