// Lógica desenvolvida com a ajuda de Paulo Henrique Lima - Turma 10

export async function getCurrency() {
  const request = await fetch('https://economia.awesomeapi.com.br/json/all');
  const allCurrencies = await request.json();
  console.log(allCurrencies);
  return allCurrencies;
}

export default getCurrency;
