export const currenciesFetch = async () => {
  try {
    const fetchApi = await fetch('https://economia.awesomeapi.com.br/json/all');
    const response = await fetchApi.json();
    return response;
  } catch (error) {
    return error;
  }
};

export const responseWithoutUSDT = (response) => {
  const objectToArray = Object.keys(response).filter(
    (singleKey) => singleKey !== 'USDT',
  );
  return objectToArray.map((currency) => {
    const { code } = response[currency];
    return code;
  });
};
