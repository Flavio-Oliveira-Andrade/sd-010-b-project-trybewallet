// Coloque aqui suas actions

export const loginUser = (email) => ({
  type: 'LOGIN_USER',
  email,
});

export const nomeDaAction = (chaveDaAction) => ({
  type: 'ADD_DESPESA',
  chaveDaAction,
});

export const preencheCurrencies = (currencies) => ({
  type: 'ADD_CURRENCIES',
  currencies,
});
