import { SET_USER } from './index';

const longinAction = (name) => ({
  type: SET_USER,
  payload: {
    name,
  },
});

export default longinAction;
