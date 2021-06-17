const CURRENCY_BASE_API = 'https://economia.awesomeapi.com.br/json/all';

const getCurrencyAPI = () => (
  fetch(CURRENCY_BASE_API)
    .then((response) => (
      response
        .json()
        .then((json) => Promise.resolve(json))
    ))
);

export default getCurrencyAPI;
