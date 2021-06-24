// Coloque aqui suas actions
export const LOGIN = 'LOGIN';

export const salvaLoginAction = (email) => ({
  type: 'LOGIN',
  email,
});
