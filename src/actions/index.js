const SAVE_EMAIL = 'SAVE_EMAIL';
const WALLET_ACTION = 'WALLET_ACTION';
const DELETE_ACTION = 'DELETE_ACTION';

export const userAction = (email) => ({
  type: SAVE_EMAIL,
  email,
  id: 0,
});

export const dispenseToReducer = (dispenseInfo, currencies, id) => ({
  type: WALLET_ACTION,
  dispenseInfo: {
    ...dispenseInfo,
    exchangeRates: currencies,
    id,
  },
});

export const dispenseAction = (dispenseInfo, id) => (dispatch) => {
  fetch('https://economia.awesomeapi.com.br/json/all')
    .then((response) => response.json())
    .then((data) => dispatch(dispenseToReducer(dispenseInfo, data, id)));
};

export const excludeEditAction = (expenses) => ({
  type: DELETE_ACTION,
  expenses,
});
