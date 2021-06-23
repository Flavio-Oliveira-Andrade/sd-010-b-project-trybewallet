// Coloque aqui suas actions
export const VALID_EMAIL = 'VALID_EMAIL';
export const WALLET_INFO = 'WALLET_INFO';

export const userInfo = (email, senha) => ({
  type: VALID_EMAIL,
  payload: {
    email,
    senha,
  },
});

export const walletInfo = (expenses) => ({
  type: WALLET_INFO,
  payload: {
    expenses,
  },
});

export function fetchAPI(expense) {
  return async (dispatch) => {
    const currencyJson = await fetch('https://economia.awesomeapi.com.br/json/all');
    const currency = await currencyJson.json();
    delete currency.USDT;

    expense.exchangeRates = currency;
    return dispatch(walletInfo(expense));
  };
}
