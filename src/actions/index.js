export const USER_INFO = 'USER_INFO';
export const WALLET_EXPENSES = 'WALLET_EXPENSES';
export const WALLET_CURRENCIES = 'WALLET_CURRENCIES';
export const DELETE_EXPENSE = 'DELETE_EXPENSE';
export const SUM_EXPENSE = 'SUM_EXPENSE';

const userAction = (email) => ({
  type: USER_INFO,
  payload: { email },
});

export const walletCurrencies = (currencies) => ({ // moedas
  type: WALLET_CURRENCIES,
  payload: { currencies },
});

export const walletExpenses = (expenses) => ({ // despesas
  type: WALLET_EXPENSES,
  payload: { expenses },
});

export function fetchWallet() {
  return (dispatch) => fetch('https://economia.awesomeapi.com.br/json/all')
    .then((response) => response.json())
    .then((currencies) => {
      delete currencies.USDT;
      dispatch(walletCurrencies(currencies));
    });
}

// export const exchangeRateAPI = (expenses) => (dispatch) => {
//   fetch(‘https://economia.awesomeapi.com.br/json/all’)
//     .then((response) => response.json())
//     .then((exchangeRates) => {
//       expenses.exchangeRates = exchangeRates;
//       dispatch(walletExpenses(expenses));
//     });
// };

export const sumExpense = () => ({
  type: SUM_EXPENSE,
});

export const dellExpense = (expenses) => ({
  type: DELETE_EXPENSE,
  payload: expenses,
});

export default userAction;
