import fetchURL from '../service/API';

export const LOGIN = 'login';
export const WALLET = 'wallet';
export const RESULT = 'result';
export const SPENDING = 'spending';

export default function loginAction({ userName, password }) {
  return ({
    type: LOGIN,
    payload: { userName, password },
  });
}

export const walletAction = (currencies) => ({
  type: WALLET,
  payload: currencies,
});

export const getResult = () => async (dispatch) => {
  const currencies = await fetchURL();
  delete currencies.USDT;
  // a propriedade delete eu aprendi com meu colega Carlos.
  return dispatch(walletAction(currencies));
};

export const exchangeCurrency = (currencies) => ({
  type: SPENDING,
  payload: currencies,
});

export const expenseAction = (spendingItems) => async (dispatch) => {
  const exchange = await fetchURL();
  const exchangeRates = { ...spendingItems, exchangeRates: exchange };
  return dispatch(exchangeCurrency(exchangeRates));
};
