// Coloque aqui suas actions
const addUser = (email) => ({
  type: 'addUser',
  payload: {
    email,
  },
});

export default addUser;
