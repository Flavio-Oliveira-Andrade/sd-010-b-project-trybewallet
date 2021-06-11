export const LoginUser = (state) => ({ type: 'USER_LOGIN', state });
export const ExpenseInfo = (payload) => ({
  type: 'ADD_EXPENSE',
  payload,
});
export const actionNewExpense = (payload) => async (dispatch) => {
  const results = await fetch('https://economia.awesomeapi.com.br/json/all');
  const data = await results.json();

  dispatch(ExpenseInfo({ ...payload, exchangeRates: data }));
};
