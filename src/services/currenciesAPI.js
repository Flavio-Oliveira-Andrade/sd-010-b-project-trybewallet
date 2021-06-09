const API_URL = 'https://economia.awesomeapi.com.br/json/all';

export const currenciesInitialsAPI = () => fetch(API_URL)
  .then((res) => res.json())
  .then((res) => Object.keys(res))
  .then((res) => res.filter((currency) => currency !== 'USDT'));

export const exchangeRatesAPI = () => fetch(API_URL)
  .then((res) => res.json());
