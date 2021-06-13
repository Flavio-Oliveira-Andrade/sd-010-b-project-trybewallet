const apiUrl = 'https://economia.awesomeapi.com.br/json/all';

const getExchange = () => (
  fetch(apiUrl).then((response) => (
    response.json().then((json) => (
      response.ok
        ? Promise.resolve(json) : Promise.reject(json)
    ))
  ))

);

export default getExchange;
