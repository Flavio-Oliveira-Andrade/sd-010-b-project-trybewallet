// Coloque aqui suas actions

const SAVE_EMAIL = 'SAVE_EMAIL';

const saveEmailAction = (email) => ({
  type: SAVE_EMAIL,
  email,
});

export default saveEmailAction;
