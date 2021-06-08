export const SET_LOGIN = 'SET_LOGIN';
export const SET_CURRENCIES = 'SET_CURRENCIES';
export const ADD_EXPENSE = 'ADD_EXPENSE';
export const REMOVE_EXPENSE = 'REMOVE_EXPENSE';
export const EDIT_EXPENSE = 'EDIT_EXPENSE';
export const HANDLE_EXPENSE = 'HANDLE_EXPENSE';
export const UPDATE_EXPENSE = 'UPDATE_EXPENSE';

export const setLogin = (email) => ({
  type: SET_LOGIN,
  email,
});

export const setCurrencies = (currencies, currencies2) => ({
  type: SET_CURRENCIES,
  currencies,
  currencies2,
});

export const toAddExpense = (expense) => ({
  type: ADD_EXPENSE,
  expense,
});

export const removeExpense = (expense) => ({
  type: REMOVE_EXPENSE,
  expense,
});

export const isChangeEdit = (edit) => ({
  type: EDIT_EXPENSE,
  edit,
});

export const handleExpense = (handle) => ({
  type: HANDLE_EXPENSE,
  handle,
});

export const isUpdate = (expense) => ({
  type: UPDATE_EXPENSE,
  expense,
});

export const updateCurrencies = () => {
  const URL = 'https://economia.awesomeapi.com.br/json/all';
  return (dispatch) => fetch(URL)
    .then((resp) => resp.json())
    .then((json) => {
      const { USDT, ...curr } = json;
      dispatch(setCurrencies(Object.keys(curr), json));
    });
};
