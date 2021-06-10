import { SET_EMAIL, SET_PASSWORD } from '.';

export const setEmailAction = (email) => ({
  type: SET_EMAIL,
  payload: { email },
});

export const setPasswordAction = (password) => ({
  type: SET_PASSWORD,
  payload: { password },
});
