import getCurrencies from '../services/api';
// LOGIN -------------------------------------------------------------------
export const ADD_LOGIN = 'ADD_LOGIN';

export const addLogin = (email, password) => ({
  type: ADD_LOGIN,
  payload: {
    email,
    password,
  },
});
// -------------------------------------------------------------------------------------------------

// WALLET -------------------------------------------------------------------
export const SAVE_CURRENCIES_LIST = 'SAVE_CURRENCIES_LIST';
export const FETCH_CURRENCIES_LIST_SUCCESS = 'FETCH_CURRENCIES_LIST_SUCCESS';
export const FETCH_CURRENCIES_LIST_ERROR = 'FETCH_CURRENCIES_LIST_ERROR';
export const ADD_EXPENSES = 'ADD_EXPENSES';
export const SUM_EXPENSES = 'SUM_EXPENSES';
export const DELETE_EXPENSE = 'DELETE_EXPENSE';

export const addExpenses = (expense) => ({
  type: ADD_EXPENSES,
  payload: {
    expense,
  },
});

export const sumExpenses = () => ({
  type: SUM_EXPENSES,
});

export const deleteExpense = (id) => ({
  type: DELETE_EXPENSE,
  payload: {
    id,
  },
});

export const saveCurrenciesList = (currencies) => ({
  type: SAVE_CURRENCIES_LIST,
  payload: {
    currencies,
  },
});

// Fetch Thunk

// Thunk com Async / Await
export function fetchCurrencies() {
  return async (dispatch) => {
    const currencies = await getCurrencies();
    return dispatch(saveCurrenciesList(currencies));
  };
}

// Thunk com Then
// export const fetchCurrencies = () => (dispatch) => {
//   getCurrencies()
//     .then((currenciesListSuccess) => dispatch(
//       saveCurrenciesList(currenciesListSuccess),
//     ));
// };

// -------------------------------------------------------------------------------------------------
