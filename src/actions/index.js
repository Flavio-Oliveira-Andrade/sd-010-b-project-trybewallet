// Coloque aqui suas actions
export const VALID_EMAIL = 'VALID_EMAIL';
export const WALLET_INFO = 'WALLET_INFO';

export const userInfo = (email, senha) => ({
  type: VALID_EMAIL,
  payload: {
    email,
    senha,
  },
});
