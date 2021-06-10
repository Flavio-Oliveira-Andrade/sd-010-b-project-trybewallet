// Coloque aqui suas actions
const verifyLogin = (user) => {
  console.log('action:');
  console.log(user);
  return ({
    type: 'VERIFY_LOGIN',
    payload: {
      user,
    },
  });
};

export default verifyLogin;
