import { SET_LOGIN,
  REQUEST_CURRENCY } from './types';
import getCurrencies from '../currencyApi';

export function setLogin(values) {
  return {
    type: SET_LOGIN,
    payload: values,
  };
}

const requestCurrencies = (data = '') => ({
  type: REQUEST_CURRENCY,
  payload: data,
});

export function fetchCurrencies() {
  return (dispatch) => getCurrencies()
    .then((res) => dispatch(requestCurrencies(res)));
}
