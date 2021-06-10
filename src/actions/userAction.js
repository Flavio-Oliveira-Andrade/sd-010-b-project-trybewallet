import { LOGIN_USER } from '.';

const emailOnChange = (email) => ({
  type: LOGIN_USER,
  payload: {
    email,
  },
});

export default emailOnChange;
