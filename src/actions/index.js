export const SET_EMAIL = 'SET_EMAIL';
export const NEW_EXPENSE = 'NEW_EXPENSE';
export const SET_EXCHANGE_RATES = 'SET_EXCHANGE_RATES';

export const setEmail = (email) => ({
  tipo: SET_EMAIL,
  email,
});

export const newExpense = (expenses, total) => ({
  type: NEW_EXPENSE,
  expenses,
  total,
});

export const setExchangeRates = (currencies, exchangeRates) => ({
  type: SET_EXCHANGE_RATES,
  currencies,
  exchangeRates,
});

export const getExchangeRates = () => async (dispatch) => {
  const currencyAPI = 'https://economia.awesomeapi.com.br/json/all';
  const realBrasileiro = -16;
  const exchangeRates = await fetch(currencyAPI)
    .then((response) => response.json())
    .then((json) => json);
  const currencies = Object.keys(exchangeRates)
    .filter((coin) => coin !== 'USDT')
    .map((coin) => coin);
  Object.keys(exchangeRates).forEach((coin) => {
    exchangeRates[coin].name = exchangeRates[coin].name.slice(0, realBrasileiro);
  });
  dispatch(setExchangeRates(currencies, exchangeRates));
};
