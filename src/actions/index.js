// Coloque aqui suas actions
export const USER_EMAIL = 'USER_EMAIL';
export const GET_CURRENCIES = 'GET_CURRENCIES';
export const USER_EXPENSES = 'USER_EXPENSES';
export const IS_FETCH = 'IS_FETCH';
export const loginUser = (email) => ({ type: USER_EMAIL, email });
export const isFetchApi = () => ({ type: IS_FETCH });
// export const getCurrencies = () => ({ type: SELECT_CURRENCIES });
export const selectCurrencies = (currencies) => ({ type: GET_CURRENCIES, currencies });
// export const userExpenses = (expenses) => ({ type: USER_EXPENSES, expenses });
export const fetchApi = () => (dispatch) => {
  dispatch(isFetchApi());
  fetch('https://economia.awesomeapi.com.br/json/all')
    .then((response) => response.json())
    .then((currencies) => dispatch(selectCurrencies(currencies)));
};
