export const apiUrl = 'https://economia.awesomeapi.com.br/json/all';

export const getExchange = () => (
  fetch(apiUrl).then((response) => (
    response.json().then((json) => (
      response.ok
        ? Promise.resolve(json) : Promise.reject(json)
    ))
  ))

);
