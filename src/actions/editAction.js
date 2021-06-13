import { EDIT_EXPENSE } from './index';

const editAction = (row) => ({
  type: EDIT_EXPENSE,
  payload: {
    row,
  },
});

export default editAction;
