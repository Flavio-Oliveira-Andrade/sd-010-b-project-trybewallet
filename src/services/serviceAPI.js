const API_URL = 'https://economia.awesomeapi.com.br/json/all';

const fetchAPI = async () => {
  const exchangeRates = await fetch(API_URL);
  return exchangeRates.json();
};

export default fetchAPI;
