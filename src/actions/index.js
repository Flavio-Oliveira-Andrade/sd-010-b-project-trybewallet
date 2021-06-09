export const LOGIN = 'login';
export const WALLET = 'wallet';

export default function loginAction({ userName, password }) {
  return ({
    type: LOGIN,
    payload: { userName, password },
  });
}

export function walletAction({ currencies, expenses }) {
  return ({
    type: WALLET,
    payload: { currencies, expenses },
  });
}
