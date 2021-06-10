const API = 'https://economia.awesomeapi.com.br/json/all';

function fetchCambioApi() {
  const fetchApi = fetch(API).then((resp) => resp.json());
  return fetchApi;
}

export default fetchCambioApi;
