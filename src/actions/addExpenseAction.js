import { ADD_EXPENSE } from './index';

const addExpenseAction = (expense, data) => ({
  type: ADD_EXPENSE,
  payload: {
    expense,
    exchangeRates: data,
  },
});

export default addExpenseAction;
