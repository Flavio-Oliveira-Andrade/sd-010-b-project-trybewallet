import fetchCurrencies from '../services';

export const userLogin = (email) => ({
  type: 'USER_LOGIN',
  payload: email,
});

export const addCurrencies = (currencies) => ({
  type: 'ADD_CURRENCIES',
  payload: currencies,
});

export const dispatchFetchedCurrencies = () => async (dispatch) => {
  const currencies = await fetchCurrencies();
  dispatch(addCurrencies(currencies));
};

const MINUS_ONE = -1;
let nextExpenseId = MINUS_ONE;

export const addExpense = (
  {
    value,
    description,
    currency,
    method,
    tag,
    exchangeRates,
  },
) => {
  nextExpenseId += 1;
  return {
    type: 'ADD_EXPENSE',
    payload: {
      id: nextExpenseId,
      value,
      description,
      currency,
      method,
      tag,
      exchangeRates,
    },
  };
};
