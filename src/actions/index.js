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

export const addExpenses = (expenses, exchange) => ({
  type: ADD_EXPENSES,
  expenses,
  exchange,
});

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
    const filteredCurrencies = Object.keys(response).filter((data) => (data !== 'USDT'
    && data !== 'DOGE'));
    dispatch(getCurrenciesSuccess(filteredCurrencies));
  });
};

export const getCurrencyExpenseThunk = () => (dispatch) => {
  dispatch(getCurrencies());
  fetchCurrency().then((response) => {
    dispatch(getCurrenciesSuccessExchange(response));
  });
};

// const filteredCurrencies = Object.entries(response).filter((data) => (data[0] !== 'USDT'
// && data[0] !== 'DOGE'));
//  const exchenge = filteredCurrencies.map((currency) => [currency[1].code, currency[1].name, currency[1].ask]);
