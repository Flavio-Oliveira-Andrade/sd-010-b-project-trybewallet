// Coloque aqui suas actions
import currenciesAPI from '../services/currenciesAPI';

export const LOGIN = 'LOGIN';
export const REQUEST_CURRENCY = 'REQUEST_CURRENCY';
export const REQUEST_CURRENCY_SUCCESS = 'REQUEST_CURRENCY_SUCCESS';
export const REQUEST_CURRENCY_ERROR = 'REQUEST_CURRENCY_ERROR';

export const userLogin = (userEmail) => ({
  type: LOGIN,
  payload: userEmail,
});

export const requestCurrencyApi = () => ({
  type: REQUEST_CURRENCY,
  payload: {
    isFetching: true,
  },
});

export const requestCurrencyApiSuccess = (currencies) => ({
  type: REQUEST_CURRENCY_SUCCESS,
  payload: {
    currencies,
    isFetching: false,
  },
});

export const requestCurrencyApiError = (error) => ({
  type: REQUEST_CURRENCY_ERROR,
  payload: {
    error,
    isFetching: false,
  },
});

export const fetchCurrency = () => (dispatch) => {
  dispatch(requestCurrencyApi());
  currenciesAPI()
    .then((res) => dispatch(requestCurrencyApiSuccess(res)))
    .catch(() => dispatch(requestCurrencyApiError('Não foi possível recuperar')));
};
