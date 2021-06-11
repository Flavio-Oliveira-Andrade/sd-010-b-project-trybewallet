// Coloque aqui suas actions

function loginAction(email) {
  return {
    type: 'LOGIN_ACTION',
    payload: {
      email,
    },
  };
}

export default loginAction;
