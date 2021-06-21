// Coloque aqui suas actions

export const loginUser = (email) => ({
  type: 'LOGIN_USER',
  user: {
    email,
  },
});
