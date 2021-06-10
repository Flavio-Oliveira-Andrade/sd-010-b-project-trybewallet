// Coloque aqui suas actions

export const changeEmail = (state) => (
  { type: 'INPUT_EMAIL', payload: { email: state } }
);
export const changePassword = (state) => (
  { type: 'INPUT_PASSWORD', payload: { password: state } }
);
