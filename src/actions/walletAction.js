import { EXPENSES, CURRENCIES } from '.';

export const expenseOnChange = (expenses) => ({
  type: EXPENSES,
  payload: {
    expenses: [expenses],
  },
});

export const currenciesOnChange = (currencies) => ({
  type: CURRENCIES,
  payload: {
    currencies,
  },
});
