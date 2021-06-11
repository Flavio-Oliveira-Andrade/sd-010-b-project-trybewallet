// Coloque aqui suas actions
export const USER_EMAIL = 'USER_EMAIL';
export const SELECT_CURRENCIES = 'SELECT_CURRENCIES';
export const loginUser = (email) => ({ type: USER_EMAIL, email });
export const selectCurrencies = (currencies) => ({ type: SELECT_CURRENCIES, currencies });
