import { ADD_EXPENSE } from './index';

const addExpenseAction = (expense) => ({
  type: ADD_EXPENSE,
  payload: {
    expense,
  },
});

export default addExpenseAction;
