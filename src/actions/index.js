// Coloque aqui suas actions
// **src/actions/index.js**
const loginAction = (email) => ({
  type: 'LOGIN',
  payload: {
    email,
  },
});

export default loginAction;
