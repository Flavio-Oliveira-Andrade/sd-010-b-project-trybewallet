// Coloque aqui suas actions
import fetchCurrency from '../services/index';

export const ADD_EMAIL = 'ADD_EMAIL';
export const GET_CURRENCIES = 'GET_CURRENCIES';
export const GET_CURRENCIES_SUCCESS = 'GET_CURRENCIES_SUCCESS';

export const addEmail = (email) => ({
  type: ADD_EMAIL,
  email,
});

export const getCurrencies = () => ({
  type: GET_CURRENCIES,
});

export const getCurrenciesSuccess = (currencies) => ({
  type: GET_CURRENCIES_SUCCESS,
  currencies,
});

export const getCurrenciesThunk = () => (dispatch) => {
  dispatch(getCurrencies());

  fetchCurrency().then((response) => {
    const filteredCurrencies = Object.keys(response).filter((data) => (data !== 'USDT'
    && data !== 'DOGE'));
    dispatch(getCurrenciesSuccess(filteredCurrencies));
  });
};
