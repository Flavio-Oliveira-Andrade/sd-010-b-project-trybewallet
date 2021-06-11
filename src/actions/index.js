export const ADD_USER = 'ADD_USER';
export const GET_TOTAL = 'GET_TOTAL';
export const GET_API = 'GET_API';

// action for Login
export const addUsername = (email) => ({
  type: ADD_USER,
  payload: email,
});

export const getAPI = () => ({ type: GET_API });
