import { LOGIN } from './index';

const loginAction = (email) => ({
  type: LOGIN,
  payload: {
    email,
  },
});
export default loginAction;
