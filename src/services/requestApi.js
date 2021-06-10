function getApi() {
  return fetch('https://economia.awesomeapi.com.br/json/all')
    .then((response) => response.json())
    .then((responseJson) => responseJson);
}

export default getApi;
