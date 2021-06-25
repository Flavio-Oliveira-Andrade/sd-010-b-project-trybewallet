// Coloque aqui suas actions
import {
  ADD_EMAIL,
  FETCH_TRUE,
  ADD,
  SAVE,
  REMOVE,
} from './types';

export const addEmail = (email) => ({
  type: ADD_EMAIL,
  payload: {
    email,
  },
});

export const isFetching = () => ({
  type: FETCH_TRUE,
  payload: true,
});

export const saveCurrencies = (currencies) => ({
  type: SAVE,
  payload: {
    currencies,
  },
});

export function fetchExp() {
  return (dispatch) => fetch('https://economia.awesomeapi.com.br/json/all')
    .then((response) => response.json())
    .then((currencies) => dispatch(saveCurrencies(currencies)));
}

export const addExpense = (expense) => ({
  type: ADD,
  payload: {
    expense,
  },
});

export const removeExpense = (id) => ({
  type: REMOVE,
  payload: {
    id,
  },
});
