// Coloque aqui suas actions
export const LOGIN = 'LOGIN';

export const loginAction = (email) => ({
  type: LOGIN,
  email,
});

export const wallet = (despesa) => ({ type: 'USER_LOGIN', despesa });
