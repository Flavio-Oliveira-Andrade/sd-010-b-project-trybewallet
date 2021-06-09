// Coloque aqui suas actions
import {
  currenciesInitialsAPI,
  exchangeRatesAPI,
} from '../services/currenciesAPI';

export const LOGIN = 'LOGIN';

export const REQUEST_CURRENCY_INITIAL = 'REQUEST_CURRENCY_INITIAL';
export const REQUEST_CURRENCY_INITIAL_SUCCESS = 'REQUEST_CURRENCY_INITIAL_SUCCESS';
export const REQUEST_CURRENCY_INITIAL_ERROR = 'REQUEST_CURRENCY_INITIAL_ERROR';

export const REQUEST_EXCHANGE_RATES = 'REQUEST_EXCHANGE_RATES';
export const REQUEST_EXCHANGE_RATES_SUCCESS = 'REQUEST_EXCHANGE_RATES_SUCCESS';
export const REQUEST_EXCHANGE_RATES_ERROR = 'REQUEST_EXCHANGE_RATES_ERROR';

export const ADD_EXPENSE = 'ADD_EXPENSE';

export const userLogin = (userEmail) => ({
  type: LOGIN,
  payload: userEmail,
});

export const requestCurrencyInitialsApi = () => ({
  type: REQUEST_CURRENCY_INITIAL,
  payload: {
    isFetching: true,
  },
});

export const requestCurrencyInitialsApiSuccess = (currencies) => ({
  type: REQUEST_CURRENCY_INITIAL_SUCCESS,
  payload: {
    currencies,
    isFetching: false,
  },
});

export const requestCurrencyInitialsApiError = (error) => ({
  type: REQUEST_CURRENCY_INITIAL_ERROR,
  payload: {
    error,
    isFetching: false,
  },
});

export const requestExchangeRatesApi = () => ({
  type: REQUEST_EXCHANGE_RATES,
  payload: {
    isFetching: true,
  },
});

export const requestExchangeRatesApiSuccess = (exchangeRates) => ({
  type: REQUEST_EXCHANGE_RATES_SUCCESS,
  payload: {
    exchangeRates,
    isFetching: false,
  },
});

export const requestExchangeRatesApiError = (error) => ({
  type: REQUEST_EXCHANGE_RATES_ERROR,
  payload: {
    error,
    isFetching: false,
  },
});

export const addExpense = (expense, exchangeRates) => ({
  type: ADD_EXPENSE,
  payload: { ...expense, exchangeRates },
});

export const fetchCurrencyInitials = () => (dispatch) => {
  dispatch(requestCurrencyInitialsApi());
  currenciesInitialsAPI()
    .then((res) => dispatch(requestCurrencyInitialsApiSuccess(res)))
    .catch(() => dispatch(requestCurrencyInitialsApiError('Não foi possível recuperar')));
};

export const fetchExchangeRatesAddExpense = (expense) => (dispatch) => {
  dispatch(requestExchangeRatesApi());
  exchangeRatesAPI()
    .then((res) => dispatch(requestExchangeRatesApiSuccess(res)))
    .then(({ payload:
      { exchangeRates } }) => dispatch(addExpense(expense, exchangeRates)))
    .catch(() => dispatch(requestExchangeRatesApiError('Não foi possível recuperar')));
};
