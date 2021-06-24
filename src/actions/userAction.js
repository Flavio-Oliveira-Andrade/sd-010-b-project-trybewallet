import { LOGIN } from '.';

const userLogin = (userEmail) => ({
  type: LOGIN,
  payload: userEmail,
});

export default userLogin;
