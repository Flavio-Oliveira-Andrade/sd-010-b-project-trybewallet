// Coloque aqui suas actions

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
  dispatch(requestApi());
  fetch('https://economia.awesomeapi.com.br/json/all')
    .then((res) => res.json())
    .then(
      (sucesso) => {
        dispatch(requestApiSuccess(sucesso));
      },
    )
    .catch((erro) => {
      dispatch(
        requestApiError(erro),
      );
    });
};
