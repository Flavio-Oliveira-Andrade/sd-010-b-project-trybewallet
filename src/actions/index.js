// Coloque aqui suas actions
export const LOGIN = 'LOGIN';

export const loginAction = (email) => ({
  type: LOGIN,
  email,
});

export const wallet = (state) => ({ type: 'USER_LOGIN', state });
