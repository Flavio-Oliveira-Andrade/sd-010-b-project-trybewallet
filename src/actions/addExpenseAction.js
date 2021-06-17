export const ADD_EXPENSE = 'adding-expenses';

const addExpenseAction = (expenses) => ({
  type: ADD_EXPENSE,
  payload: { expenses },
});

export default addExpenseAction;
