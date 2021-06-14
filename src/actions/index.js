// Coloque aqui suas actions
import { apiUrl } from '../services/api';

export const addRegister = (value) => ({ type: 'ADD_REGISTER', data: value });
export const deleteRegister = (value) => ({ type: 'DELETE_REGISTER', value });
export const loginAction = (value) => ({ type: 'LOGIN', value });

export const requestCurrencies = () => ({
  type: 'REQUEST',
  payload: {
    isFetching: true,
  },
});

export const requestCurrenciesSuccess = (json) => ({
  type: 'ADD_MOEDAS',
  payload: {
    currencies: json,
    currenciesData: json,
    isFetching: false,
  },
});

export const requestCurrenciesError = (error) => ({
  type: 'ERROR',
  payload: {
    error,
  },
});

export const fetchCurrencies = () => (dispatch) => {
  dispatch(requestCurrencies());
  fetch(apiUrl)
    .then((response) => (response.json())
      .then((json) => {
        dispatch(requestCurrenciesSuccess(json));
      }))
    .catch((currenciesError) => {
      dispatch(requestCurrenciesError(currenciesError));
    });
};
