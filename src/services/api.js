export default async function fetchApi() {
  const data = await fetch('https://economia.awesomeapi.com.br/json/all');
  const response = await data.json();
  return response;
}
