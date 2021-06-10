import {
  SET_LOGIN,
  REQUEST_CURRENCY,
  ADD_EXPENSE,
} from './types';
import getCurrencies from '../currencyApi';

// ACTION DO FORM DE LOGIN
export function setLogin(data) {
  return {
    type: SET_LOGIN,
    payload: data,
  };
}

// ACTION DA PRIMEIRA REQUISIÇÃO API(RENDERIZAR)
const requestCurrencies = (data = '') => ({
  type: REQUEST_CURRENCY,
  payload: data,
});

export function fetchCurrencies() {
  return (dispatch) => getCurrencies()
    .then((res) => dispatch(requestCurrencies(res)));
}

// ACTION PARA ADICIONAR DESPESA
export function setExpense(data) {
  return {
    type: ADD_EXPENSE,
    payload: data,
  };
}

// ACTION DA SEGUNDA REQUISIÇÃO API (ADICIONAR DESPESA)
export function fetchCurrenciesPart2(data) {
  return (dispatch) => getCurrencies()
    .then((res) => {
      data.exchangeRates = res;
      return dispatch(setExpense(data));
    });
}
