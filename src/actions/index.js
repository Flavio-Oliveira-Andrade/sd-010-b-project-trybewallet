import requestApi from '../services/api';

export const saveEmailLogin = (email) => ({
  type: 'EMAIL_LOGIN',
  email,
});

export const saveExpenses = (expense) => ({
  type: 'SAVE_EXPENSES',
  expense,
});

export const saveRequest = () => async (dispatch) => {
  const response = await requestApi();
  console.log(response);
  dispatch({
    type: 'SAVE_REQUEST',
    response,
  });
};
