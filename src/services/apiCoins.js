export default async function fetchCurrencies() {
  const endPoint = 'https://economia.awesomeapi.com.br/json/all';
  const response = await fetch(endPoint);
  const coinsObj = await response.json();
  delete coinsObj.USDT;
  return coinsObj;
}
