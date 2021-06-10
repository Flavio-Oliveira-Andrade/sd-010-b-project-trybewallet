import { SET_NAME, SET_PASSWORD } from '.';

export const setNameAction = (name) => ({
  type: SET_NAME,
  payload: { name },
});

export const setPasswordAction = (password) => ({
  type: SET_PASSWORD,
  payload: { password },
});
