import { SAVE_EXPENSES } from '.';

export default function saveExpenses(currencies, expenses) {
  return {
    type: SAVE_EXPENSES,
    payload: {
      currencies,
      expenses,
    },
  };
}
