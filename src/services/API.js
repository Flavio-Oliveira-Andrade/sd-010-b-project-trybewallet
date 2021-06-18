const getApi = () => {
  const fetchAPI = fetch('https://economia.awesomeapi.com.br/json/all')
    .then((result) => (
      result
        .json()
        .then((json) => (result.ok ? Promise.resolve(json) : Promise.reject(json)))
    ));
  return fetchAPI;
};

export default getApi;
