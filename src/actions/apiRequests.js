// import { getApiData } from '../services/api';
import { FETCH_URL, FETCH_URL_SUCCESS, FETCH_URL_ERROR, GET_CURRENCIES } from './index';

const ERROR_404 = 404;
export function fetchURL() {
  return { type: FETCH_URL };
}

export function getCurrencieData(data) {
  return { type: GET_CURRENCIES, payload: { currencies: Object.keys(data) } };
}

export function fetchURLSuccess(payload) {
  return { type: FETCH_URL_SUCCESS, payload };
}

export function fetchURLError(error) {
  return { type: FETCH_URL_ERROR, error };
}

export function getDataThunk() {
  return (dispatch) => {
    dispatch(fetchURL());
    return fetch('https://economia.awesomeapi.com.br/json/all')
      .then((res) => res.json())
      .then(
        (coin) => {
          if (coin.status === ERROR_404) {
            throw new Error('error');
          }
          dispatch(fetchURLSuccess(coin));
        },
      )
      .catch((error) => { dispatch(fetchURLError(error.message)); });
  };
}
