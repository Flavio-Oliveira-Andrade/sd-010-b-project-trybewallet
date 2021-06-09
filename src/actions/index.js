export const ADD_USER = 'ADD_USER';

const userInput = (email) => ({
  type: ADD_USER,
  email,
});

export default userInput;
