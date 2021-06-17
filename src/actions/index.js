import { LOGIN } from '../reducers/user';
import {
  CREATE_EXPENSE,
  UPDATE_EXPENSE,
  DELETE_EXPENSE,
  RETRIEVE_EXPENSE,
  GET_CURRENCIES,
} from '../reducers/wallet';

const urlRequest = 'https://economia.awesomeapi.com.br/json/all';

export const getExpense = (id) => ({ type: RETRIEVE_EXPENSE, id });

export const createExpense = (expense) => ({ type: CREATE_EXPENSE, expense });

export const updateExpense = (expense, index) => (
  { type: UPDATE_EXPENSE, expense, index });

export const deleteExpense = (index) => ({ type: DELETE_EXPENSE, index });

export const authLogin = (user) => ({ type: LOGIN, user });

export const requestCurrencies = () => ({ type: 'REQUEST_CURRENCIES' });

export const getCurrencies = (currencies) => ({ type: GET_CURRENCIES, currencies });

export function fetchCurrencies() {
  return (dispatch) => {
    dispatch(requestCurrencies());
    return fetch(urlRequest)
      .then((response) => response.json())
      .then((currencies) => dispatch(getCurrencies(currencies)));
  };
};
