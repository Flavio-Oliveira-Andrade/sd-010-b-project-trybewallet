export const apiUrl = 'https://economia.awesomeapi.com.br/json/all';

export const getCurrencies = () => (
  fetch(apiUrl)
    .then((response) => response.json())
    .then((res) => Object.keys(res))
    .then((res) => res.filter((currency) => currency !== 'USDT'))
);

export const getCurrenciesAll = () => (
  fetch(apiUrl)
    .then((response) => response.json())
);
// Sob Revisão

export const getExchange = () => (
  fetch(apiUrl).then((response) => (
    response.json().then((json) => (
      response.ok
        ? Promise.resolve(json) : Promise.reject(json)
    ))
  ))

);
