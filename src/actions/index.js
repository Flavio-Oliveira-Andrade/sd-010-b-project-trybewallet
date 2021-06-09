// Coloque aqui suas actions
export const ADD_USER = 'ADD_USER';

export const GET_TOTAL = 'GET_TOTAL';

export const addUsername = (email) => ({
  type: ADD_USER,
  payload: email,
});
