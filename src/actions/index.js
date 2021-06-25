export const requestApi = () => ({ type: 'REQUEST_API', payload: { isFetching: true } });

export const requestApiSuccess = (apiDados) => ({
  type: 'REQUEST_API_SUCCESS',
  payload: {
    moedas: Object.keys(apiDados),
    isFetching: false,
  },
});

// export const requestApiError = (error) => ({
//   type: 'REQUEST_API_ERROR',
//   payload: { error, isFetching: false },
// });

export const fetchApiCurrencies = () => (dispatch) => {
  dispatch(requestApi());
  fetch('https://economia.awesomeapi.com.br/json/all')
    .then((response) => response.json())
    .then((currencies) => {
      const currenciesObject = currencies;
      delete currenciesObject.USDT;
      dispatch(requestApiSuccess(currenciesObject));
    });
};

export const saveExpense = (expense) => (dispatch) => {
  dispatch(requestApi());
  fetch('https://economia.awesomeapi.com.br/json/all')
    .then((response) => response.json())
    .then(
      (sucesso) => {
        const aux = sucesso;
        delete aux.USDT;
        return dispatch({
          type: 'SALVAR_DESPESA',
          payload: { ...expense, exchangeRates: sucesso },
        });
      },
    );
};

export const deleteExpense = (newStateExpenses) => ({
  type: 'DELETE_EXPENSE',
  payload: newStateExpenses,
});
