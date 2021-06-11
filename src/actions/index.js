import { getCurrency } from '../services/requirements';

export const SAVE_LOGIN_EMAIL = 'SAVE_LOGIN_EMAIL';
export const REQUEST_CURRENCIES = 'REQUEST_CURRENCIES';
export const RECEIVE_CURRENCIES = 'RECEIVE_CURRENCIES';
export const ERROR_CURRENCIES = 'ERROR_CURRENCIES';

export const saveLoginEmail = (email) => ({
  type: SAVE_LOGIN_EMAIL,
  email,
});

export const requestCurrencies = () => ({
  type: REQUEST_CURRENCIES,
  payload: {
    isFetching: true,
  },
});

export const receiveCurrencies = (currency) => ({
  type: RECEIVE_CURRENCIES,
  payload: {
    currencies: currency,
    isFetching: false,
  },
});

export const errorCurrencies = (error) => ({
  type: ERROR_CURRENCIES,
  payload: { error, isFetching: false },
});

export const fetchCurrencies = () => (dispatch) => {
  dispatch(requestCurrencies());
  getCurrency()
    .then((response) => dispatch(
      receiveCurrencies(response),
    ))
    .catch((error) => dispatch(
      errorCurrencies(error),
    ));
};
