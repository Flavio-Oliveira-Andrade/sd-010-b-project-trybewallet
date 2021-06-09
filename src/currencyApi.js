export default function fetchCurrency() {
  const currencies = fetch('https://economia.awesomeapi.com.br/json/all')
    .then((res) => res.json());

  return currencies;
}
