// Coloque aqui suas actions
import fetchCurrency from '../services/index';

export const ADD_EMAIL = 'ADD_EMAIL';
export const GET_CURRENCIES = 'GET_CURRENCIES';
export const GET_CURRENCIES_SUCCESS = 'GET_CURRENCIES_SUCCESS';
export const ADD_EXPENSES = 'ADD_EXPENSES';
export const GET_CURRENCIES_SUCCESS_EXCHANGE = 'GET_CURRENCIES_SUCCESS_EXCHANGE';

export const addEmail = (email) => ({
  type: ADD_EMAIL,
  email,
});

export const addExpenses = (expenses) => ({
  type: ADD_EXPENSES,
  expenses,
});

export const expenseThunk = (expense) => (dispatch) => {
  fetchCurrency().then((exchangeRates) => (
    dispatch(addExpenses({ ...expense, exchangeRates }))
  ));
};

export const getCurrencies = () => ({
  type: GET_CURRENCIES,
});

export const getCurrenciesSuccess = (currencies) => ({
  type: GET_CURRENCIES_SUCCESS,
  currencies,
});

export const getCurrenciesSuccessExchange = (currencies2) => ({
  type: GET_CURRENCIES_SUCCESS_EXCHANGE,
  currencies2,
});

export const getCurrenciesThunk = () => (dispatch) => {
  dispatch(getCurrencies());

  fetchCurrency().then((response) => {
    const filteredCurrencies = Object.keys(response).filter(
      (data) => data !== 'USDT' && data !== 'DOGE',
    );
    dispatch(getCurrenciesSuccess(filteredCurrencies));
  });
};

export const getCurrencyExpenseThunk = () => (dispatch) => {
  dispatch(getCurrencies());
  fetchCurrency().then((response) => {
    dispatch(getCurrenciesSuccessExchange(response));
  });
};
