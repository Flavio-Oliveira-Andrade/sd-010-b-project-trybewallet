export const LOGIN = 'login';
export const WALLET = 'wallet';

export function loginAction({ userName, password }) {
  return ({
    type: LOGIN,
    payload: { userName, password },
  });
}
export default loginAction;

export function walletAction({ currencies, expenses }) {
  return ({
    type: WALLET,
    payload: { currencies, expenses },
  });
}
