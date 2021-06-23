export const USER_LOGIN = 'USER_LOGIN';
export const NEW_EXPENSE = 'NEW_EXPENSE';

export const userLogin = (email) => ({
  type: USER_LOGIN,
  user: {
    email,
  },
});

export const addNewExpense = (expense) => ({
  type: NEW_EXPENSE,
  expense,
});

export const dispatchAction = (expense) => async (dispatch) => {
  const URL = 'https://economia.awesomeapi.com.br/json/all';

  const fetchAPI = await fetch(URL);
  const parseJSON = fetchAPI.json();

  dispatch(addNewExpense({
    ...expense,
    exchangeRate: parseJSON,
  }));
};
