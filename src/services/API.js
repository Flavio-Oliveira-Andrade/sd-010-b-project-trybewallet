const BASE_URL = 'https://economia.awesomeapi.com.br/json/all';

const getAPI = async () => {
  const response = await fetch(BASE_URL);
  const result = await response.json();
  return result;
};

export default getAPI;
