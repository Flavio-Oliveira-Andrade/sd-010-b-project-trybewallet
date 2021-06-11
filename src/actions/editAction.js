import { EDIT_EXPENSE } from './index';

const editAction = (expense) => ({
  type: EDIT_EXPENSE,
  payload: {
    expense,
  },
});

export default editAction;
