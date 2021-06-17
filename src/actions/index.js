import getCurrencyAPI from '../currencyAPI';

export const VALIDATE_EMAIL = 'VALIDATE_EMAIL';
export const GET_CURRENCY = 'GET_CURRENCY';
export const NEW_EXPENSE = 'ADD_EXPENSE';
export const DELETE_EXPENSE = 'DELETE_EXPENSE';

export const emailValidate = (email) => ({
  type: VALIDATE_EMAIL,
  email,
});

const getCurrency = (result) => ({
  type: GET_CURRENCY,
  payload: result,
});

export const newExpense = (expense) => ({
  type: NEW_EXPENSE,
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
