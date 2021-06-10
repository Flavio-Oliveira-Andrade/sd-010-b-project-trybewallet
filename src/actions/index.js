// Coloque aqui suas actions

export const inputEmail = (state) => (
  { type: 'INPUT_EMAIL', payload: { email: state } }
);
export const inputPassword = (state) => (
  { type: 'INPUT_PASSWORD', payload: { password: state } }
);
