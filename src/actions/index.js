export const USER = 'USER';
export const CURRENCIES = 'CURRENCIES';
export const EXPENSE = 'EXPENSE';
export const DELETE = 'DELETE';

export const saveUserAction = (user) => ({
  type: USER,
  user,
});

export const deleteExpenses = (id) => ({
  type: DELETE,
  id,
});

export const saveExpenses = ({
  id, value, description, currency, method, tag, exchangeRates }) => ({
  type: EXPENSE,
  expense: {
    id,
    value,
    description,
    currency,
    method,
    tag,
    exchangeRates,
  },
});

export const saveCurrenciesAction = (data) => (dispatch) => {
  data.then((response) => dispatch({ type: CURRENCIES, currencie: response }));
};
