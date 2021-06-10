export const USER_DATA = 'USER_DATA';
export const EXPENSE_DATA = 'EXPENSE_DATA';
export const REQUEST_CURRENCY = 'REQUEST_CURRENCY';
export const RECEIVE_CURRENCY = 'RECEIVE_CURRENCY';

export function userExpenses({ value, description, currency, method, tag }) {
  return {
    type: EXPENSE_DATA,
    payload: {
      value,
      description,
      currency,
      method,
      tag,
    },
  };
}

export function userLogin(email, password) {
  return {
    type: USER_DATA,
    email,
    password,
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
