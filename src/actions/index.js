export const ADD_USER = 'ADD_USER';

const userInput = (payload) => ({
  type: ADD_USER,
  payload,
});

export default userInput;
