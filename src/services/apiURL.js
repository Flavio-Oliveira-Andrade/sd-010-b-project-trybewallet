const API_URL = 'https://economia.awesomeapi.com.br/json/all';

export default async () => (
  fetch(API_URL)
    .then((response) => response.json())
    .then((response) => {
      if (response.status) {
        const { status, message } = response;
        throw new Error(`Error ${status}. ${message}`);
      }
      return response;
    })
    .catch((error) => {
      console.error(error);
      return {};
    })
);
