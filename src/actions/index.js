// Coloque aqui suas actions
export const ADD_USER = 'ADD_USER';

export const addUsername = (email) => ({
  type: ADD_USER,
  payload: { email },
});
