import getApi from '../services/API';

export const LOGIN = 'LOGIN';
export const MOEDA = 'MOEDA';
export const DESPESA = 'DESPESA';
export const EXCLUIR = 'EXCLUIR';

export const actionLogin = (payload) => ({
  type: LOGIN,
  payload,
});

export const actionMoeda = (payload) => ({
  type: MOEDA,
  payload,
});

export const actionDespesaOk = (payload) => ({
  type: DESPESA,
  payload,
});

export const actionExcluir = (payload) => ({
  type: EXCLUIR,
  payload,
});

export const actionNovaDespesa = (payload) => async (dispatch) => {
  const result = await fetch('https://economia.awesomeapi.com.br/json/all');
  const data = await result.json();

  dispatch(actionDespesaOk({ ...payload, exchangeRates: data }));
};

export const moedaCifrao = () => async (dispatch) => {
  const api = await getApi();
  delete api.USDT;
  delete api.DOGE;
  return dispatch(actionMoeda(api));
};
