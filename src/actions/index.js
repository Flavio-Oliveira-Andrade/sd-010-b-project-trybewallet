// Coloque aqui suas actions
export const NEW_USER = 'NEW_USER';
export const REQUEST_WALLET = 'REQUEST_WALLET';

const userAction = (payload) => ({
  type: 'NEW_USER',
  payload,
});

export const requestWallet = (expenses, exchange) => ({
  type: 'REQUEST_WALLET',
  payload: { ...expenses, exchangeRates: exchange },
});

export const fetchWallet = (expenses) => (dispatch) => fetch('https://economia.awesomeapi.com.br/json/all')
  .then((r) => r.json())
  .then((json) => dispatch(requestWallet(expenses, json)));

export default userAction;
