export const SET_USER = 'SET_USER';
export const ADD_EXPENSE = 'ADD_EXPENSE';
export const DEL_EXPENSE = 'DEL_EXPENSE';
export const UPDATE_AMOUNT = 'UPDATE_AMOUNT';
export const UPDATE_EXPENSE = 'UPDATE_EXPENSE';

export const setUser = (payload) => ({
  type: SET_USER,
  payload,
});

export const addExpense = (payload) => ({
  type: ADD_EXPENSE,
  payload,
});

export const delExpense = (payload) => ({
  type: DEL_EXPENSE,
  payload,
});

export const updateAmount = (payload) => ({
  type: UPDATE_AMOUNT,
  payload,
});

export const updateExpense = (payload) => ({
  type: UPDATE_EXPENSE,
  payload,
});
