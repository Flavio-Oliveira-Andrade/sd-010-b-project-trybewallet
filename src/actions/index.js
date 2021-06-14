// Coloque aqui suas actions
import { apiUrl } from '../services/api';

export const loginAction = (value) => ({ type: 'LOGIN', value });

export const requestCurrenciesOk = (value) => ({
  type: 'ADD_CURRENCY',
  value,
});

export const fetchCurrencies = () => (dispatch) => {
  fetch(apiUrl)
    .then((response) => response.json())
    .then((res) => dispatch(requestCurrenciesOk(res)));
};
