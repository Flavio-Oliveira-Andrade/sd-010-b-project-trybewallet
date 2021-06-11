export const SAVE_USER_INFO = 'SAVE_USER_INFO';
export const RECEIVE_COINS = 'RECEIVE_COINS';
export const RECEIVE_EXPENSE = 'RECEIVE_EXPENSE';

export const saveUserInfo = (email) => ({
  type: SAVE_USER_INFO,
  payload: {
    email,
  },
});

const receiveCoins = (coin) => ({
  type: RECEIVE_COINS,
  payload: {
    coin,
  },
});

export const receiveExpense = (expenses) => ({
  type: RECEIVE_EXPENSE,
  payload: {
    expenses,
  },
});

export function fetchCoin() {
  return (dispatch) => {
    fetch('https://economia.awesomeapi.com.br/json/all')
      .then((response) => response.json())
      .then((coin) => {
        delete coin.USDT;
        dispatch(receiveCoins(coin));
      });
  };
}
