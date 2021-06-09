import { ADD_EXPENSE } from './index';

const addExpenseAction = (expenses) => ({
  type: ADD_EXPENSE,
  payload: {
    expenses,
  },
});

export default addExpenseAction;
