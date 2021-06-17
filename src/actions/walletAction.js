export const WALLET_INFO = 'wallet';

const walletAction = (currencies) => ({
  type: WALLET_INFO,
  payload: currencies,
});

export default walletAction;
