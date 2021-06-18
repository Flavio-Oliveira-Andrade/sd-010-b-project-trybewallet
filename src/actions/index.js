import requestApi from '../services/api';

export const saveEmailLogin = (email) => ({
  type: 'EMAIL_LOGIN',
  email,
});

export const saveExpenses = (expenses) => ({
  type: 'SAVE_EXPENSES',
  expenses,
});

// Codigo ajustado com a ajuda do Jonathan Souza
export const saveRequest = (expenses) => async (dispatch) => {
  const response = await requestApi();
  const salveDespesa = { ...expenses, exchangeRates: response };
  dispatch(saveExpenses(salveDespesa));
};
