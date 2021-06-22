// Coloque aqui suas actions

export const LOGIN = 'LOGIN';

export const userLogin = (userEmail) => ({
  type: LOGIN,
  payload: userEmail,
});
