export default async function getCurrencies() {
  try {
    const data = await fetch('https://economia.awesomeapi.com.br/json/all');
    const result = await data.json();
    return result;
  } catch (error) {
    return Error(error);
  }
}
