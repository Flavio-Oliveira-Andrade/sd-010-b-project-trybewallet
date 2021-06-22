export const LOGIN_USER = 'LOGIN_USER';
export const ADD_EXPENSE = 'ADD_EXPENSE';

export const handleUserLogin = (email) => ({
  type: LOGIN_USER,
  email,
});

export const addExpense = (expense) => ({
  type: ADD_EXPENSE,
  expense,
});
