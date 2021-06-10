export const login = (email) => ({ type: 'LOGIN', email });
export const updateCurrencies = (data) => ({ type: 'UPDATE_CURRENCIES', data });
export const addExpense = (data) => ({ type: 'ADD_EXPENSE', data });
export const delExpense = (data) => ({ type: 'DELETE_EXPENSE', data });
export const toEdit = (status, id) => ({ type: 'TO_EDIT', status, id });
export const editExpense = (data) => ({ type: 'EDIT_EXPENSE', data });
