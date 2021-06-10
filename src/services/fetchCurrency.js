function fetchCurrency() {
  const url = 'https://economia.awesomeapi.com.br/json/all';
  return fetch(url).then((response) => response.json());
}

export default fetchCurrency;
