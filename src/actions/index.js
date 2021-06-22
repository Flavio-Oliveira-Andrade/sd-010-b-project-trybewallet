// Coloque aqui suas actions
export const loginAction = (email) => ({ type: 'LOGIN', email });
export const addExpense = (expense) => ({ type: 'ADD', expense });
export const updateCurrencies = (currency) => ({ type: 'UPDATE', currency });
export const deleteExpense = (expense) => ({ type: 'DELETE', expense });
export const editExpense = (expense) => ({ type: 'EDIT', expense, isEdit });
export const setExpense = (expenses) => ({ type: 'SET_EXPENSES', expenses });
