// Coloque aqui suas actions

import getCurrencies from '../services/currenciesAPI';

export const inputEmail = (state) => (
  { type: 'INPUT_EMAIL', payload: { email: state } }
);

export const inputPassword = (state) => (
  { type: 'INPUT_PASSWORD', payload: { password: state } }
);

export const fetchingCurrencies = () => ({
  type: 'FETCHING_CURRENCIES',
  payload: {
    isFetching: true,
  },
});

export const requestCurrencies = (currencies) => ({
  type: 'REQUEST_CURRENCIES',
  payload: {
    currencies,
    isFetching: false,
  },
});

export const fetchCurrencies = () => async (dispatch) => {
  dispatch(fetchingCurrencies());

  const currencies = await getCurrencies();
  const currenciesKeys = Object.keys(currencies);
  const USDT_INDEX = 1;
  currenciesKeys.splice(USDT_INDEX, 1);
  dispatch(requestCurrencies(currenciesKeys));
};
