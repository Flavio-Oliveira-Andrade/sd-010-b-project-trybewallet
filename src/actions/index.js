// Coloque aqui suas actions
import { getCurrencies } from '../services/api';

export const loginAction = (value) => ({
  type: 'LOGIN',
  value,
});

export const requestCurrenciesOk = (currencies) => ({
  type: 'ADD_CURRENCY',
  payload: { currencies },
});

export const fetchCurrencies = () => (dispatch) => {
  getCurrencies()
    .then((res) => dispatch(requestCurrenciesOk(res)));
};
