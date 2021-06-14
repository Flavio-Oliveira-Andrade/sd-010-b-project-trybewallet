export const NEW_USER = 'NEW_USER';
export const WALLET_INFO = 'WALLET_INFO';

const userAction = (payload) => ({
  type: 'NEW_USER',
  payload,
});

const walletAction = (expenses, exchange) => ({
  type: 'REQUEST_WALLET',
  payload: { ...expenses, exchangeRates: exchange },
});
// EXCHANGE?

export const fetchWallet = (expenses) => (dispatch) => fetch('https://economia.awesomeapi.com.br/json/all')
  .then((response) => response.json())
  .then((json) => dispatch(walletAction(expenses, json)));

export default userAction;

// export walletaction too?
// Coloque aqui suas actions
