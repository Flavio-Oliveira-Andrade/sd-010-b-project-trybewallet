// Coloque aqui suas actions
export const SAVE_EMAIL = 'SAVE_EMAIL';

export const userAction = (email) => ({
  type: SAVE_EMAIL,
  email,
});
