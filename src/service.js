const currenciesAPI = async () => {
  try {
    const urlRequest = 'https://economia.awesomeapi.com.br/json/all';
    const response = await fetch(urlRequest);
    const currenc = await response.json();
    return currenc;
  } catch (error) {
    return error.message;
  }
};
export default currenciesAPI;
