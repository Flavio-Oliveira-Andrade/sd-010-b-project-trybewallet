import fetchAPI from '../services/serviceAPI';

export const LOGIN_INFO = 'login';
export const WALLET_INFO = 'wallet';
export const RESPONSE = 'response';
export const ADD_EXPENSE = 'adding-expenses';

export default function loginAction({ userEmail, userPassword }) {
  return ({
    type: LOGIN_INFO,
    payload: { userEmail, userPassword },
  });
}

export const walletAction = (currencies) => ({
  type: WALLET_INFO,
  payload: currencies,
});

export const responseAction = () => async (dispatch) => {
  const currencies = await fetchAPI();
  delete currencies.USDT;
  return dispatch(walletAction(currencies));
};

export const currencyExchange = (currencies) => ({
  type: ADD_EXPENSE,
  payload: { currencies },
});

export const addExpenseAction = (items) => async (dispatch) => {
  const getExchange = await fetchAPI();
  const exchangeRates = { ...items, exchangeRates: getExchange };
  return dispatch(currencyExchange(exchangeRates));
};
