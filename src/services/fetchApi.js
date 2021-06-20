const URL = "https://economia.awesomeapi.com.br/json/all";

//Filtrando todas as moedas exceto o dolar turismo.
const fetchApi = async () => {
  const response = await fetch(URL);
  const responseJson = await response.json();
  return Object.values(responseJson)
    .filter((currencie) => currencie.codein !== "BRLT")
    .map((currencie) => currencie.code);
};

export default fetchApi;
