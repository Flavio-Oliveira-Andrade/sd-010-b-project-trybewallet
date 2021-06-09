const getAPI = () => (
  fetch('https://economia.awesomeapi.com.br/json/all')
    .then((response) => (
      response.json()
        .then((json) => (response ? Promise.resolve(json) : Promise.reject(json)))
    ))
);

export default getAPI;
