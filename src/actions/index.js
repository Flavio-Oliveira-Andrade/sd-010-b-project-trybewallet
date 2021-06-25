export const ADDEMAIL = 'ADDEMAIL';
export const MONEY = 'MONEY';
export const CLEAR = 'CLEAR';

export const addAnEmail = (param) => ({
  type: ADDEMAIL,
  payload: {
    email: param,
  },
});

export const actionMoneySuccess = (payload) => ({
  type: MONEY,
  payload,
});

export const actionClear = (payload) => ({
  type: CLEAR,
  payload,
});

export const actionNewMoney = (payload) => async (dispatch) => {
  const result = await fetch('https://economia.awesomeapi.com.br/json/all');
  const data = await result.json();

  dispatch(actionMoneySuccess({ ...payload, exchangeRates: data }));
};
