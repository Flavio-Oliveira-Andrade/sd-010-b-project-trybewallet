import { getApiData } from '../services/api';
import { FETCH_URL, FETCH_URL_SUCCESS, FETCH_URL_ERROR, GET_CURRENCIES } from './index';

export function fetchURL() {
  return { type: FETCH_URL };
}

export function getCurrencieData(data) {
  return { type: GET_CURRENCIES, payload: { currencies: Object.keys(data) } };
}

export function fetchURLSuccess(data) {
  return { type: FETCH_URL_SUCCESS, payload: Object.entries(data) };
}

export function fetchURLError(payload) {
  return { type: FETCH_URL_ERROR, payload };
}

export function getDataThunk() {
  return (dispatch) => {
    dispatch(fetchURL());
    getApiData()
      .then((res) => {
        dispatch(getCurrencieData(res));
        dispatch(fetchURLSuccess(res));
      })
      .catch((error) => { fetchURLError(error); });
  };
}
