export const WALLET_INFO = 'wallet';

function walletAction({ currencies, expenses }) {
  return ({
    type: WALLET_INFO,
    payload: { currencies, expenses },
  });
}

export default walletAction;
