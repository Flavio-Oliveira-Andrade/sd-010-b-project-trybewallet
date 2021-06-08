// Coloque aqui suas actions

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

const loginUser = (email) => ({
  type: LOGIN_SUCCESS,
  email,
});

export default loginUser;
