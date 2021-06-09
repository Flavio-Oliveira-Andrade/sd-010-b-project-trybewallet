// Coloque aqui suas actions
const SAVE_EMAIL = 'SAVE_EMAIL';
const WALLET_ACTION = 'WALLET_ACTION';

export const userAction = (email) => ({
  type: SAVE_EMAIL,
  email,
});

export const dispenseToReducer = (dispenseInfo, currencies) => ({
  type: WALLET_ACTION,
  dispenseInfo: {
    ...dispenseInfo,
    exchangeRates: currencies,
  },
});
export const dispenseAction = (dispenseInfo) => (dispatch) => {
  fetch('https://economia.awesomeapi.com.br/json/all')
    .then((response) => response.json())
    .then((data) => dispatch(dispenseToReducer(dispenseInfo, data)));
};
