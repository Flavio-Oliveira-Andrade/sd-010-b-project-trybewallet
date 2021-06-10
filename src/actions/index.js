// Coloque aqui suas actions
// Actions Login
export const saveEmailLogin = (email) => ({
  type: 'SAVE_EMAIL_LOGIN',
  payload: email,
});

export const requestApi = () => ({
  type: 'REQUEST_API',
  payload: {
    isFetching: true,
  },
});

export const requestApiSuccess = (dadosDaApi) => ({
  type: 'REQUEST_API_SUCCESS',
  payload: {
    moedas: Object.keys(dadosDaApi),
    tudo: dadosDaApi,
    isFetching: false,
  },
}
);

export const requestApiError = (error) => ({
  type: 'REQUEST_API_ERROR',
  payload: { error, isFetching: false },
});

export const fetchApi = () => (dispatch) => {
  console.log('Fetch da API');
  dispatch(requestApi());
  fetch('https://economia.awesomeapi.com.br/json/all')
    .then((res) => res.json())
    .then(
      (sucesso) => {
        const sucessoAux = sucesso;
        delete sucessoAux.USDT;
        dispatch(requestApiSuccess(sucessoAux));
      },
    )
    .catch((erro) => {
      dispatch(
        requestApiError(erro),
      );
    });
};

// Action Wallet

export const salvarDespesa = (despesa) => (dispatch) => {
  console.log('Fetch da API');
  dispatch(requestApi());
  fetch('https://economia.awesomeapi.com.br/json/all')
    .then((res) => res.json())
    .then(
      (sucesso) => {
        const sucessoAux = sucesso;
        delete sucessoAux.USDT;
        return dispatch({
          type: 'SALVAR_DESPESA',
          payload: { ...despesa, exchangeRates: sucesso } });
      },
    );
};

// export const salvarDespesa = (despesa) => ({
//   type: 'SALVAR_DESPESA',
//   payload: despesa,
// });
