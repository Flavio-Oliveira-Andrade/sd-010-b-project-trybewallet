const AWESOME_BASE_API = 'https://economia.awesomeapi.com.br/json';

export const getCorrentCoins = () => (
  fetch(`${AWESOME_BASE_API}/all`)
    .then((res) => (
      res
        .json()
        .then((json) => json)
    ))
);

export default getCorrentCoins;
