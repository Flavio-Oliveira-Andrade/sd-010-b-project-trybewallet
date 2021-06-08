// Coloque aqui suas actions
export const SAVE_LOGIN_EMAIL = 'SAVE_LOGIN_EMAIL';

export const saveLoginEmail = (email) => ({
  type: SAVE_LOGIN_EMAIL,
  email,
});
