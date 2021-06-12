import { EXPENSES, CURRENCIES } from '.';

export const expenseOnChange = ({
  id, value, currency, method, tag, description, exchangeRates }) => ({
  type: EXPENSES,
  payload: {
    expenses: {
      id,
      value,
      currency,
      method,
      tag,
      description,
      exchangeRates,
    },
  },
});

export const currenciesOnChange = (currencies) => ({
  type: CURRENCIES,
  payload: {
    currencies,
  },
});
