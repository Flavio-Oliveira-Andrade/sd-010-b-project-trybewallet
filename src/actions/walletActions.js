import { ADD, SAVE } from './index';

export const saveCurrencies = (currencies) => ({
  type: SAVE,
  payload: {
    currencies,
  },
});

export function fetchCoins() {
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
