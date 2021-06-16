import getCurrencyAPI from '../services/currencyAPI';

export const CHECK_EMAIL = 'CHECK_EMAIL';
export const GET_CURRENCY = 'GET_CURRENCY';
export const ADD_EXPENSE = 'ADD_EXPENSE';
export const DELETE_EXPENSE = 'DELETE_EXPENSE';

export const emailValidate = (email) => ({
  type: CHECK_EMAIL,
  email,
});

const getCurrency = (result) => ({
  type: GET_CURRENCY,
  payload: result,
});

export const addExpense = (expense) => ({
  type: ADD_EXPENSE,
  payload: expense,
});

export const deleteExpense = (expenseId) => ({
  type: DELETE_EXPENSE,
  payload: expenseId,
});

export const fetchCurrency = () => (dispatch) => {
  getCurrencyAPI()
    .then((currency) => dispatch(
      getCurrency(currency),
    ));
};
