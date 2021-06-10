export default async function fetchCurrency() {
  const END_POINT = 'https://economia.awesomeapi.com.br/json/all';
  const CURRENCY = await fetch(END_POINT);
  return (CURRENCY.json());
}
