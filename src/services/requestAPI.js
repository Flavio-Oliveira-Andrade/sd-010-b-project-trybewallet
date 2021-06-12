function getApi() {
  return fetch('https://economia.awesomeapi.com.br/json/all')
    .then((response) => response.json())
    .then((response) => response);
}

export default getApi;
