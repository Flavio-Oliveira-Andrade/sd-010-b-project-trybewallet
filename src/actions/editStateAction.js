import { EDIT_INPUT_STATE } from './index';

const editStateAction = (row) => ({
  type: EDIT_INPUT_STATE,
  payload: {
    row,
  },
});

export default editStateAction;
