export const LOGIN = 'LOGIN';
export const NEW_EXPENSE = 'NEW_EXPENSE';

export const login = (value) => ({
  type: LOGIN,
  value,
});

export const newExpense = (expense) => ({
  type: NEW_EXPENSE,
  expense,
});
