// Busca na Api com tratamento de sucesso / erro
export default async function getCurrencies() {
  try {
    const data = await fetch('https://economia.awesomeapi.com.br/json/all');
    const result = await data.json();
    return result;
  } catch (error) {
    console.log('deu erro!!!!!');
    return Error(error);
  }
}
