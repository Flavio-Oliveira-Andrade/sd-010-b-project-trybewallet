const API_URL = 'https://economia.awesomeapi.com.br/json/all';

const currenciesAPI = () => fetch(API_URL)
  .then((res) => res.json())
  .then((res) => Object.entries(res))
  .then((res) => res.filter((pair) => pair[0] !== 'USDT'));

export default currenciesAPI;
