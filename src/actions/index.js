// Coloque aqui suas actions
// import { getMoedas } from '../services/api';

export const actionAddEmailUser = (email) => ({
  type: 'ADD_USER',
  payload: {
    email,
  },
});
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
  fetch('https://economia.awesomeapi.com.br/json/all')
    .then((response) => (response.json())
      .then((json) => {
        dispatch(requestCurrenciesSuccess(json));
      }))
    .catch((currenciesError) => {
      dispatch(requestCurrenciesError(currenciesError));
    });
};
