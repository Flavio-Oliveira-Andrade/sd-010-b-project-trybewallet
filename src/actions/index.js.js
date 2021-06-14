// Coloque aqui suas actions
const saveEmailLogon = (email) => ({
  type: 'SAVE_EMAIL_LOGON',
  payload: {
    email,
  },
});
export default saveEmailLogon;
