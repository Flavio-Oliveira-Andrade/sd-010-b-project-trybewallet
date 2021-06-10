const url = 'https://economia.awesomeapi.com.br/json/all';

const getAPICurrency = () => {
  const fetchCurrency = fetch(url)
    .then((response) => (
      response
        .json()
        .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)))
    ));
  return fetchCurrency;
};

export default getAPICurrency;
