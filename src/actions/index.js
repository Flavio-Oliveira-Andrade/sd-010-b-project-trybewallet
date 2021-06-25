export const EMAIL_USER = 'EMAIL_USER';
export const WALLET_SPEND = 'WALLET_SPEND';
export const DELETE_EXPENSE = 'DELETE_EXPENSE';
export const DELET_EXPENSE = 'DELET_EXPENSE';

export const actionEmail = (email) => ({
  type: EMAIL_USER,
  email,
});
export const actionWalletSpend = (spend, getCoins) => ({
  type: WALLET_SPEND,
  newSpend: {
    id: spend.id,
    value: spend.value,
    description: spend.description,
    currency: spend.currency,
    method: spend.method,
    tag: spend.tag,
    exchangeRates: getCoins,
  },
});

export const fetchWalletSpend = (spend) => async (dispatch) => {
  const data = await fetch('https://economia.awesomeapi.com.br/json/all');
  const getCoins = await data.json();
  delete getCoins.USDT;

  dispatch(actionWalletSpend(spend, getCoins));
};
export const actionDeleteExpense = (id) => ({
  type: DELET_EXPENSE,
  id,
});
