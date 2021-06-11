async function requestApi() {
  const fetchApi = await fetch('https://economia.awesomeapi.com.br/json/all');
  const response = await fetchApi.json();
  delete response.USDT;
  return response;
}

export default requestApi;
