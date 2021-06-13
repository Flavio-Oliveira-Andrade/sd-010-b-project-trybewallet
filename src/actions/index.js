export const USER_DATA = 'USER_DATA';
export const EXPENSE_DATA = 'EXPENSE_DATA';
export const REQUEST_CURRENCY = 'REQUEST_CURRENCY';
export const RECEIVE_CURRENCY = 'RECEIVE_CURRENCY';

export function userExpenses(payload) {
  return {
    type: EXPENSE_DATA,
    payload,
  };
}

export function userLogin(email) {
  return {
    type: USER_DATA,
    email,
  };
}

function requestCurrency() {
  return {
    type: REQUEST_CURRENCY,
  };
}

function receiveCurrency(currencies) {
  return {
    type: RECEIVE_CURRENCY,
    payload: [
      currencies.USD,
      currencies.CAD,
      currencies.EUR,
      currencies.GBP,
      currencies.ARS,
      currencies.BTC,
      currencies.LTC,
      currencies.JPY,
      currencies.CHF,
      currencies.AUD,
      currencies.CNY,
      currencies.ILS,
      currencies.ETH,
      currencies.XRP,
    ],
  };
}

export function fetchCurrencies() {
  return (dispatch) => {
    dispatch(requestCurrency());
    return fetch('https://economia.awesomeapi.com.br/json/all')
      .then((response) => response.json())
      .then((currencies) => dispatch(receiveCurrency(currencies)));
  };
}

export function fetchExpenses(payload) {
  return (dispatch) => {
    dispatch(requestCurrency());
    return fetch('https://economia.awesomeapi.com.br/json/all')
      .then((response) => response.json())
      .then((rate) => dispatch(userExpenses({ ...payload, exchangeRates: rate })));
  };
}
