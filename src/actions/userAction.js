import { LOGIN } from '.';

export const userLogin = (userEmail) => ({
  type: LOGIN,
  payload: userEmail,
});
