// Coloque aqui suas actions
export const adicionarUsuario = (email) => ({
  type: 'EMAIL',
  email,
});

export const receberMoeda = (currencies) => ({
  type: 'RECEBER_MOEDAS',
  currencies,
});

export function fetchApi() {
  return (dispatch) => {
    fetch('https://economia.awesomeapi.com.br/json/all')
      .then((response) => response.json())
      .then((moedaCorrente) => {
        delete moedaCorrente.USDT;
        dispatch(receberMoeda(moedaCorrente));
      });
  };
}

export const adicionarDespesa = (expenses) => ({
  type: 'ADICIONAR_DESPESAS',
  expenses,
});

export const fetchApiDespesa = (despesa) => (dispatch) => {
  fetch('https://economia.awesomeapi.com.br/json/all')
    .then((response) => response.json())
    .then((resposta) => {
      despesa.exchangeRates = resposta;
      dispatch(adicionarDespesa(despesa));
    });
};

export const dellExpense = (deleteExpense) => ({
  type: 'DELL_EXPENSE',
  payload: deleteExpense,
});
