const apiUrl = 'https://economia.awesomeapi.com.br/json/all';

export default async function fetchCurrency() {
  const response = await fetch(apiUrl);
  const responseJson = await response.json();
  delete responseJson.USDT;
  return responseJson;
}
