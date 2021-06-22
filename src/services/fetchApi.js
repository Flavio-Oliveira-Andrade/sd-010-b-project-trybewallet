const URL = 'https://economia.awesomeapi.com.br/json/all';

// Filtrando somente os codigos das moedas exceto o dolar turismo.
export const fetchApiCurrence = async () => {
  const response = await fetch(URL);
  const responseJson = await response.json();
  const { USDT, ...rest } = responseJson;
  return Object.keys(rest);
  // return Object.values(responseJson)
  //   .filter((currencie) => currencie.codein !== 'BRLT')
  //   .map((currencie) => currencie.code);
};

// Trazendo todas as moedas exceto o dolar turismo
export const fetchApi = async () => {
  const response = await fetch(URL);
  const responseJson = await response.json();
  return responseJson;
};
