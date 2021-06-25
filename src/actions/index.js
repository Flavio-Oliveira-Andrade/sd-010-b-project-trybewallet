// Coloque aqui suas actions

export const addUser = (email) => ({
  type: 'ADD_USER',
  email,
});

export const receiveCurrencies = (currencies) => ({
  type: 'RECEIVE_CURRENCIES',
  payload: {
    currencies,
  },
});

export const addCurrencies = (expanses) => ({
  type: 'ADD_EXPENSES',
  expanses,
});
