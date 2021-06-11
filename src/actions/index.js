// Coloque aqui suas actions
export const USER_EMAIL = 'USER_EMAIL';
export const SELECT_CURRENCIES = 'SELECT_CURRENCIES';
export const USER_EXPENSES = 'USER_EXPENSES';
export const loginUser = (email) => ({ type: USER_EMAIL, email });
export const selectCurrencies = (currencies) => ({ type: SELECT_CURRENCIES, currencies });
export const userExpenses = (expenses) => ({ type: USER_EXPENSES, expenses });
