// import getAPI from '../services/getApi';

// Coloque aqui suas actions
export const login = (email) => ({ type: 'LOGIN', email });

export const addExpense = (value) => ({
  type: 'ADD_EXPENSE',
  value,
});

export const receiveAPI = (currency) => ({
  type: 'RECEIVE_API',
  currency,
});

export const fetchCurrency = () => (dispatch) => {
  fetch('https://economia.awesomeapi.com.br/json/all')
    .then((response) => response.json())
    .then((currency) => {
      delete currency.USDT;
      return dispatch(receiveAPI(currency));
    });
};
