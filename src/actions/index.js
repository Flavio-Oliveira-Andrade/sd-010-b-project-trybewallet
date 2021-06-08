// Coloque aqui suas actions
const actionAddEmailUser = (email) => ({
  type: 'ADD_USER',
  payload: {
    email,
  },
});

export default actionAddEmailUser;
