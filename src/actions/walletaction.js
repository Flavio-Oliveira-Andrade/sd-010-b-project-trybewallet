export const ADD = 'ADD';
export const REQUEST = 'REQUEST';

export const actionCurrency = (obj) => ({
  type: ADD,
  currency: obj,
});

export const requestCurrency = (obj) => ({
  type: REQUEST,
  currency: obj,
});

export const actionAsk = () => async (dispatch) => {
  const obj = await fetch('https://economia.awesomeapi.com.br/json/all').then((resolve) => resolve.json());
  dispatch(requestCurrency(obj));
  return obj;
};
