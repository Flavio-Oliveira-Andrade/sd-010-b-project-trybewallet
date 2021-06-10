// Coloque aqui suas actions
import LOGIN, { ADD_EXPENSE, CHANGE_EXPENSE } from './actionTypes';

const loginAction = (payload) => ({
  type: LOGIN,
  payload,
});

export default loginAction;

const addExpenseAction = (payload) => ({
  type: ADD_EXPENSE,
  payload,
});

export const addExpenseThunk = (payload) => (dispatch) => {
  fetch('https://economia.awesomeapi.com.br/json/all')
    .then((response) => response.json())
    .then((response) => {
      payload.exchangeRates = response;
      dispatch(addExpenseAction(payload));
    });
};

export const deleteExpenseAction = (payload) => ({
  type: CHANGE_EXPENSE,
  payload,
});

export const editExpenseAction = (payload) => ({
  type: CHANGE_EXPENSE,
  payload,
});
