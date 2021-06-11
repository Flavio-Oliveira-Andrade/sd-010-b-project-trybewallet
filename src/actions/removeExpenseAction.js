import { REMOVE_EXPENSE } from './index';

const removeExpenseAction = (expense) => ({
  type: REMOVE_EXPENSE,
  payload: {
    expense,
  },
});

export default removeExpenseAction;
