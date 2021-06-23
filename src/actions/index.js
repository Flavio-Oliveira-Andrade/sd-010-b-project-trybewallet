// Coloque aqui suas actions
export const adicionarUsuario = (email) => ({
  type: 'EMAIL',
  email,
});

export const receberMoeda = (moedas) => ({
  type: 'RECEBER_MOEDAS',
  moedas,
});

export function fetchApi() {
  return (dispatch) => {
    fetch('https://economia.awesomeapi.com.br/json/all')
      .then((response) => response.json())
      .then((moeda) => {
        delete currencie.USDT;
        dispatch(receberMoeda(moeda));
      });
  };
}

export const adicionarDespesa = (despesas) => ({
  type: 'ADICIONAR_DESPESAS',
  despesas,
});

export const fetchApiDespesa = (despesa) => (dispatch) => {
  fetch('https://economia.awesomeapi.com.br/json/all')
    .then((response) => response.json())
    .then((resposta) => {
      despesa.exchangeRates = resposta;
      dispatch(adicionarDespesa(despesa));
    });
};
