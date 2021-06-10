// Coloque aqui suas actions
function loginAction(email, password) {
  return ({
    type: 'LOGIN',
    payload: {
      email,
      password,
    },
  });
}

export default loginAction;
