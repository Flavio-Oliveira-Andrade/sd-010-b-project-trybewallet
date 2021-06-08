// Coloque aqui suas actions
export const NEW_USER = 'NEW_USER';

const userAction = (payload) => ({
  type: 'NEW_USER',
  payload,
});

export default userAction;
