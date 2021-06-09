export const ADD_USER = 'ADD_USER';

export const userInput = (email) => ({
  type: ADD_USER,
  payload: email,
});
