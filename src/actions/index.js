export const LOGAR = 'LOGAR';
export const NOVA_DESPESA = 'NOVA_DESPESA';
export const EXCLUIR = 'EXCLUIR';

export const actionLogar = (payload) => ({
  type: LOGAR,
  payload,
});

export const actionNovaDespesaSuccess = (payload) => ({
  type: NOVA_DESPESA,
  payload,
});

export const actionExcluir = (payload) => ({
  type: EXCLUIR,
  payload,
});

export const actionNovaDespesa = (payload) => async (dispatch) => {
  const result = await fetch('https://economia.awesomeapi.com.br/json/all');
  const data = await result.json();

  dispatch(actionNovaDespesaSuccess({ ...payload, exchangeRates: data }));
};
