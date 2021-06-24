export const ADD_EXPENSE = 'ADD_EXPENSE';
export const SAVE_PRICE = 'SAVE_PRICE';
export const TOTAL_EXPENSE = 'TOTAL_EXPENSE';
export const DELETE_EXPENSE = 'DELETE_EXPENSE';

export const addExpense = (payload) => ({
  type: ADD_EXPENSE,
  payload,
});

export const savePrice = (payload) => ({
  type: SAVE_PRICE,
  payload,
});

export const totalExpense = (payload) => ({
  type: TOTAL_EXPENSE,
  payload,
});

export const deleteExpense = (payload) => ({
  type: DELETE_EXPENSE,
  payload,
});
