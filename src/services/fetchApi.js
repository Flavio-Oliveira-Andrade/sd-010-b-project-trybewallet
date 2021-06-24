const fetchApi = async () => {
  try {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const result = await response.json();
    return result;
  } catch (error) {
    return new Error(error);
  }
};

export default fetchApi;
