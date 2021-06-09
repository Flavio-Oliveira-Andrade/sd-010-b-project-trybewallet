export const STORE_EMAIL = 'STORE_EMAIL';

export const appLogin = (email) => ({
  type: STORE_EMAIL,
  payload: {
    email,
  },
});
