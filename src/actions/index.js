import fetchApi from "../services/fetchApi";

// Coloque aqui suas actions
export const LOGIN = 'LOGIN';
export const REQUEST_CURRENCIES = 'REQUEST_CURRENCIES';
export const RESOLVED_CURRENCIES = 'RESOLVED_CURRENCIES';
export const REJECT_CURRENCIES = 'REJECT_CURRENCIES';

export const salvaLoginAction = (email) => ({
  type: 'LOGIN',
  email,
});

export const request = () => ({
  type: REQUEST_CURRENCIES,
});

export const resolve = (currency) => ({
  type: RESOLVED_CURRENCIES,
  currency,
});

export const reject = (error) => ({
  type: REJECT_CURRENCIES,
  error,
});

export const saveCurrencies = () => async (dispatch) => {
  dispatch(request());
  try {
    const response = await fetchApi();
    dispatch(resolve(Object.keys(response)));
  } catch (error) {
    dispatch(reject(error));
  }
};

export const REQUEST_EXPENSE = 'REQUEST_EXPENSE';
export const RESOLVED_EXPENSE = 'RESOLVED_EXPENSE';
export const REJECT_EXPENSE = 'REJECT_EXPENSE';

export const requestExpense = () => ({
  type: REQUEST_EXPENSE,
});

export const resolveExpense = (expense, response) => ({
  type: RESOLVED_EXPENSE,
  expense,
  response,
});

export const rejectExpense = (error) => ({
  type: REJECT_EXPENSE,
  error,
});

export const setExpense = (expense) => async (dispatch) => {
  dispatch(requestExpense());
  try {
    const response = await fetchApi();
    expense.exchangeRates = response;
    dispatch(resolveExpense(expense, response));
  } catch (error) {
    dispatch(rejectExpense(error));
  }
};

export const DELETE_EXPENSE = 'DELETE_EXPENSE';

export const deleteExpense = (id) => ({
  type: DELETE_EXPENSE,
  id,
});
