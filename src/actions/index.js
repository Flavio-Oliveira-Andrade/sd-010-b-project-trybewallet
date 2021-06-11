// Coloque aqui suas actions
function loginAction(email, password) {
  return {
    type: 'LOGIN_ACTION',
    payload: {
      email,
      password,
    },
  };
}

export default loginAction;
