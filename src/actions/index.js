// Coloque aqui suas actions
// import { getMoedas } from '../services/api';

export const actionAddEmailUser = (email) => ({
  type: 'ADD_USER',
  payload: {
    email,
  },
});

export const requestCurrenciesSuccess = (currencies) => ({ // eslint-disable-line
  type: 'ADD_MOEDAS',
  payload: {
    currencies,
  },
});

export const requestCurrenciesError = (error) => ({
  type: 'ERROR',
  payload: {
    error,
  },
});

export const fetchCurrencies = () => (dispatch) => {
  fetch('https://economia.awesomeapi.com.br/json/all')
    .then((response) => (
      response.json()
        .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)))
    ))
    // problema na hora de colocar no store
    .then((currenciesResponse) => dispatch(
      requestCurrenciesSuccess(currenciesResponse),
    ))
    .catch((currenciesError) => dispatch(
      requestCurrenciesError(currenciesError),
    ));
};
