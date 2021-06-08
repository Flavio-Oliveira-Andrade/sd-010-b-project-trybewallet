import { SET_USER } from './index';

const loginAction = (email) => ({
  type: SET_USER,
  payload: {
    email,
  },
});

export default loginAction;
