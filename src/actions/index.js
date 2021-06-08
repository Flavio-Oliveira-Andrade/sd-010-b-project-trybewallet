// Coloque aqui suas actions

export const SAVE_EMAIL_LOGIN = 'SAVE_EMAIL_LOGIN';

export const saveEmailLogin = (email) => ({
  type: SAVE_EMAIL_LOGIN,
  payload: email,
});
