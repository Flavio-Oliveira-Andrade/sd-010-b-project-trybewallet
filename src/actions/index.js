import getApi from '../services/API';

export const LOGIN = 'LOGIN';
export const MOEDA = 'MOEDA';

export const actionLogin = (payload) => ({
  type: LOGIN,
  payload,
});

export const actionMoeda = (payload) => ({
  type: MOEDA,
  payload,
});

export const moedaCifrao = () => async (dispatch) => {
  const api = await getApi();
  delete api.USDT;
  delete api.DOGE;
  return dispatch(actionMoeda(api));
};
