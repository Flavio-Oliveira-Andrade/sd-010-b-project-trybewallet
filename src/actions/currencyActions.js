export const REQUEST_API = 'REQUEST_API';
export const REQUEST_API_SUCESS = 'REQUEST_API_SUCESS';
export const REQUEST_API_ERROR = 'REQUEST_API_ERROR';

export const getCurrency = () => ({
  type: REQUEST_API,
});

export const getCurrencySucess = (payload) => ({
  type: REQUEST_API_SUCESS,
  payload,
});

export const getCurrencyError = (payload) => ({
  type: REQUEST_API_ERROR,
  payload,
});

export const getCurrencyThunk = () => (dispatch) => {
  dispatch(getCurrency());
  return fetch('https://economia.awesomeapi.com.br/json/all')
    .then((response) => response.json())
    .then((answer) => {
      delete answer.USDT;
      dispatch(getCurrencySucess(answer));
    })
    .catch((error) => dispatch(getCurrencyError(error)));
};
