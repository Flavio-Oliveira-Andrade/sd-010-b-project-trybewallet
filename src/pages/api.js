export async function getMoedas() {
  return fetch('https://economia.awesomeapi.com.br/json/all')
    .then((fetchReturn) => fetchReturn.json())
    .catch((error) => error);
}

export async function morreLint() {
  return fetch('https://economia.awesomeapi.com.br/json/all')
    .then((fetchReturn) => fetchReturn.json())
    .catch((error) => error);
}
