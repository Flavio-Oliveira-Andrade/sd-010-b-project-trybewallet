// Coloque aqui suas actions
export const LOGIN = 'LOGIN';
export const REQUEST_CURRENCIES = 'REQUEST_CURRENCIES';
export const RESOLVED_CURRENCIES = 'RESOLVED_CURRENCIES';

export const salvaLoginAction = (email) => ({
  type: 'LOGIN',
  email,
});

export const request = () => ({
  type: REQUEST_CURRENCIES,
});

export const resolve = (currency) => ({
  type: RESOLVED_CURRENCIES,
  currency,
});
