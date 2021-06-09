export const SET_USER = 'SET_USER';
export const ADD_EXPENSE = 'ADD_EXPENSE';

export const setUser = (payload) => ({
  type: 'SET_USER',
  payload,
});

export const addExpense = (payload) => ({
  type: 'ADD_EXPENSE',
  payload,
});
