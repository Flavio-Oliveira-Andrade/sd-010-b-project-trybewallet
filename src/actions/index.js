// Coloque aqui suas actions
export const adicionarUsuario = (email) => ({
  type: 'adicionarUsuario',
  payload: {
    email,
  },
});

export const receberMoeda = (currencies) => ({
  type: 'receberMoeda',
  payload: {
    currencies,
  },
});

export function fetchApi() {
  return (dispatch) => {
    fetch('https://economia.awesomeapi.com.br/json/all')
      .then((response) => response.json())
      .then((currencie) => {
        delete currencie.USDT;
        dispatch(receberMoeda(currencie));
      });
  };
}
