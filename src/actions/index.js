import requestApi from '../services/api';

export const saveEmailLogin = (email) => ({
  type: 'EMAIL_LOGIN',
  email,
});

export const saveExpenses = () => async (dispatch) => {
  const response = await requestApi();
  dispatch({
    type: 'SAVE_EXPENSES',
    payload: response,
  });
};
