export const LOGIN = 'LOGIN';
export const DESPESA_NOVA = 'DESPESA_NOVA';
export const EXCLUIR = 'EXCLUIR';

export const actionLogin = (payload) => ({
  type: LOGIN,
  payload,
});

export const actionNovaDespesaSuccess = (payload) => ({
  type: DESPESA_NOVA,
  payload,
});

export const actionExcluir = (payload) => ({
  type: EXCLUIR,
  payload,
});
