export const ADD_USER = 'ADD_USER';

export const requestAddUser = (email) => ({
  type: ADD_USER,
  email,
});
