const API_URL = 'https://economia.awesomeapi.com.br/json/all';

async function fetchAPI() {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
}

export default fetchAPI;
