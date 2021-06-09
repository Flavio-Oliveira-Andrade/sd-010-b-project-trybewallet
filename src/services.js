export function validateEmail(email) {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}

const endpoint = 'https://economia.awesomeapi.com.br/json/all';

const fetchInformation = () => (
  fetch(endpoint)
    .then((response) => (
      response
        .json()
        .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)))
    ))
);

export default fetchInformation;
