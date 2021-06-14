// Coloque aqui suas actions
export const EMAIL_INPUT = 'EMAIL_INPUT';
export const REQUEST_CURRENCIES = 'REQUEST_CURRENCIES';
export const GET_CURRENCIES = 'GET_CURRENCIES';
export const FAILED_FETCH = 'FAILED_FETCH';
export const ADD_EXPENSE = 'ADD_EXPENSE';
export const ADD_CURRENCIES = 'ADD_CURRENCIES';
export const UPDATE_TOTAL = 'UPDATE_TOTAL';

export const loginAction = (payload) => ({ type: EMAIL_INPUT, payload });

export const requestCurrencies = () => ({ type: REQUEST_CURRENCIES });

export const getCurrencies = (payload) => ({ type: GET_CURRENCIES, payload });

export const failedFetch = (error) => ({ type: FAILED_FETCH, payload: error });

export const addExpense = (payload) => ({ type: ADD_EXPENSE, payload });

export const updateTotalExpense = (payload) => ({ type: UPDATE_TOTAL, payload });

export function fetchCurrencies() {
  return (dispatch) => {
    dispatch(requestCurrencies());
    return fetch('https://economia.awesomeapi.com.br/json/all')
      .then((r) => r.json()
        .then((json) => dispatch(getCurrencies(json))));
  };
}
